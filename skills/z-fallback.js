//
// Fallback Skill: Handles any message that doesn't match a command
//
module.exports = function (controller) {

    controller.on('direct_message,direct_mention', function(bot, message) {

        // If the message is from a bot (Webex Bot flag)
        // This is a more reliable way than checking bot.identity.id
        if (message.bot_id) {
            return;
        }

        let text = "I'm sorry, I didn't quite understand that. ";
        text += "\nTry typing `help` to see what I can do.";

        await bot.reply(message, text);
    });
}
