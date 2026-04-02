//
// Fallback Skill: Handles any message that doesn't match a command
//
module.exports = function (controller) {

    controller.on('message,direct_message', async (bot, message) => {

        // 1. Only respond to actual text messages
        // This prevents the bot from responding to 'room join' or 'file upload' events
        if (message.type !== 'message' || !message.text) {
            await bot.reply(message, message.type + " -- " + message.text);
            return;
        }

        // 2. Check if another skill (Hears) already handled this
        if (message.handled) {
            await bot.reply(message, message.handled);
            return;
        }

        // 3. Manual check for known commands to prevent the "Double Reply"
        const input = message.text.toLowerCase().trim();
        const knownCommands = ['help', 'about', 'ping', 'wisdom', 'who', 'uptime'];
        
        if (knownCommands.includes(input)) {
            return;
        }

        // 4. Final safety: If the message is from a bot (Webex Bot flag)
        // This is a more reliable way than checking bot.identity.id
        if (message.bot_id) {
            return;
        }

        let text = "I'm sorry, I didn't quite understand that. ";
        text += "\nTry typing `help` to see what I can do.";

        await bot.reply(message, text);
    });
}
