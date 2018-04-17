const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete()
    const m = await message.channel.send("Ping?");
    m.edit("Pong! :ping_pong: Discord Latency is `" + [m.createdTimestamp - message.createdTimestamp - Math.round(bot.ping)] + "`ms. API Latency is `" + [Math.round(bot.ping)] + "`ms. " + "Total latency is `" + [m.createdTimestamp - message.createdTimestamp] + "`ms");
}

module.exports.help = {
    name: "ping"
}
