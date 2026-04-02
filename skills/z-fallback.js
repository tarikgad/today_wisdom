//
// Fallback Command
//
module.exports = function (controller) {

    // Catch-all regex to handle unrecognized inputs
    controller.hears(['.*'], 'message,direct_message,direct_mention', async (bot, message) => {
        
        // Use a cleaner markdown format for Webex
        let fallbackMessage = "Sorry, I did not understand.\n\nTry " 
            + bot.enrichCommand(message, "help");
            
        await bot.reply(message, fallbackMessage);
    });
}//
// Fallback Command
//
module.exports = function (controller) {

    controller.hears(["(.*)"], 'direct_message,direct_mention', function (bot, message) {
        var mardown = "Sorry, I did not understand.<br/>Try "
            + bot.enrichCommand(message, "help");
            
        bot.reply(message, mardown);
    });
}
