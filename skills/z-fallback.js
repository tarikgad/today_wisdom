// skills/z-fallback.js
module.exports = function(controller) {

    controller.hears(['^(?!(help|about|ping|wisdom)).*$'], 'direct_message,direct_mention', async (bot, message) => {
        
        const response = "I'm sorry, I didn't quite understand that. Try typing `help`.";
        
        await bot.reply(message, response);
    });
}
