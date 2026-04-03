//
// Fallback Skill: Handles any message that doesn't match a command
//
module.exports = function (controller) {

    controller.on('direct_message,direct_mention,message', async(bot, message) {

        let text = "I'm sorry, I didn't quite understand that. ";
        text += "\nTry typing `help` to see what I can do.";

        await bot.reply(message, text);
    });
}
