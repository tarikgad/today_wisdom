//
// Fallback Skill: Handles any message that doesn't match a command
//
module.exports = function (controller) {

    // Use a 'message' event with a slight delay or a specific check
    controller.on('message,direct_message', async (bot, message) => {

        // 1. Ignore if this is a message FROM the bot itself
        if (message.user === bot.identity.id) {
            return;
        }

        // 2. Ignore if the message was already handled by a 'hears' command
        // In Botkit v4, 'hears' events usually stop the propagation if 
        // they are matched, but we add this for extra safety.
        if (message.handled) {
            return;
        }

        // 3. Check if the message matches any of your 'hears' keywords.
        // This is a manual safety check to prevent double-replying to 'help' or 'wisdom'
        const commands = ['help', 'about', 'ping', 'wisdom', 'who', 'uptime'];
        const input = message.text ? message.text.toLowerCase().trim() : '';
        
        if (commands.includes(input)) {
            return;
        }

        // 4. If we got here, it's a true 'blabla' message
        let text = "I'm sorry, I didn't quite understand that. ";
        text += "\nTry typing `help` to see what I can do.";

        await bot.reply(message, text);
    });
}
