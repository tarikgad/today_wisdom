//
// Command: about
//
module.exports = function (controller) {

    controller.hears(['about', 'ping', 'uptime'], 'message,direct_message', async (bot, message) => {
        
        // Build a fresh metadata object for the response
        const stats = {
            "status": "online",
            "owner": process.env.OWNER || "Tarik Gad",
            "uptime": new Date().toGMTString(),
            "platform": "Render/Node.js",
            "version": "1.0.0"
        };

        let text = "### Bot Metadata\n";
        text += "```json\n";
        text += JSON.stringify(stats, null, 4);
        text += "\n```";

        await bot.reply(message, text);
    });
}
