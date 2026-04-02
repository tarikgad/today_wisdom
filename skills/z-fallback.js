//
// Fallback Skill: Handles any message that doesn't match a command
//
module.exports = function (controller) {

    controller.on('message,direct_message', async (bot, message) => {
        
        // 1. Check if another skill (like wisdom.js) already replied
        // If it did, 'message.handled' will usually be true or 
        // we can check if it was a 'hears' event.
        if (message.handled || message.type !== 'message') {
            return;
        }

        // 2. Filter out the bot's own messages (Safety first!)
        if (message.user === bot.identity.id) {
            return;
        }

        let text = "I'm sorry, I didn't quite understand that. ";
        text += "\nTry typing `help` to see what I can do.";

        await bot.reply(message, text);
    });
}
