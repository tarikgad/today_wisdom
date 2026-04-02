//
// Command: help
//
module.exports = function (controller) {

    controller.hears(['help', 'who'], 'message,direct_message', async (bot, message) => {
        
        let text = "Here are the commands I currently understand:";
        text += "\n- **about**: shows metadata about myself";
        text += "\n- **ping**: check if I am awake";
        text += "\n- **wisdom**: receive a random proverb";
        text += "\n- **help**: displays this message";

        await bot.reply(message, text);
    });
}
