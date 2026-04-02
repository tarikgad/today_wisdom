//
// Welcome message 
// sent as the bot is added to a Room
//
module.exports = function (controller) {

    // In Botkit v4, 'membersAdded' is the event for joining a space
    controller.on('membersAdded', async(bot, message) => {
        
        // Ensure the "member added" is actually the bot itself
        // (This prevents the bot from saying 'Hi' every time a human joins)
        if (message.incoming_message.from.id === bot.getConfig().adapter.identity.id) {
            
            let welcome = "Hi";
            if (process.env.BOT_NICKNAME) {
                welcome += `, I am the **${process.env.BOT_NICKNAME}** bot`;
            }
            welcome += "! Type `help` to learn more about my skills.";

            // Use await for modern async/await pattern
            const newMessage = await bot.reply(message, welcome);

            // Check if it's a group space to show the mention hint
            if (message.roomType === "group") {
                // Using bot.enrichCommand from your bot.js
                const helpCmd = bot.enrichCommand(message, "help");
                await bot.reply(message, `_Note that this is a 'Group' Space. I will answer only if mentioned: for help, type ${helpCmd}_`);
            }
        }
    });
}
