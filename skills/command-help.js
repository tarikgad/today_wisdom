//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who", "what"], 'message,direct_message,direct_mention', async (bot, message) => {
        
        let text = "Here are my skills:";
        
        // Using template literals for cleaner formatting in Webex
        text += `\n- ${bot.enrichCommand(message, "about")}: shows metadata about myself`;
        text += `\n- ${bot.enrichCommand(message, "help")}: spreads the word about my skills`;
        text += `\n- ${bot.enrichCommand(message, "wisdom")}: show Today Wisdom`;
        
        await bot.reply(message, text);
    });
};//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who", "what"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, "about") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
		text += "\n- " + bot.enrichCommand(message, "wisdom") + ": show Today Wisdom";
        bot.reply(message, text);
    });
}
