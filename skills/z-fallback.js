//
// Fallback Skill: Handles any message that doesn't match a command
//
module.exports = function (controller) {

    controller.on('message,direct_message', async (bot, message) => {
        
        let text = "I'm sorry, I didn't quite understand that. ";
        
        // In Botkit v4, we just provide the command string directly
        // rather than using the removed enrichCommand function.
        text += "\nTry typing `help` to see what I can do.";

        await bot.reply(message, text);
    });
}
