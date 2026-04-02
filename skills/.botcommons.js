//
// Command: bot commons (Metadata & Health)
//
module.exports = function (controller) {

    // Fixed the regex to correctly catch 'about', 'commons', 'bot', or 'ping'
    controller.hears(["^about", "^commons", "^bot", "^ping"], 'message,direct_message,direct_mention', async (bot, message) => {
        
        // Pulling from the commons object we set up in bot.js
        // We use a fallback empty string if the variable isn't set to prevent 'undefined' in the JSON
        const metadata = {
            owner: process.env.owner || "Tarik",
            support: process.env.support || "N/A",
            "up-since": new Date().toGMTString(), // Or pull from bot.commons if you prefer
            version: require("../package.json").version
        };

        // Format as a clean JSON block for Webex
        const jsonResponse = '```json\n' + JSON.stringify(metadata, null, 4) + '\n```';
        
        await bot.reply(message, jsonResponse);
    });
};//
// Command: bot commons
//
module.exports = function (controller) {

    controller.hears(["^\about", "^\commons", "^\bot", "^ping"], 'direct_message,direct_mention', function (bot, message) {
        var metadata = '{\n'
            + '   "owner"       : "' + bot.commons["owner"] + '",\n'
            + '   "support"     : "' + bot.commons["support"] + '",\n'
            + '   "up-since"    : "' + bot.commons["up-since"] + '",\n'
            + '}\n';
        bot.reply(message, '```json\n' + metadata + '\n```');
    });
}
