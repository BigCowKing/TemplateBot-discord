const Discord = require("discord.js")

module.exports.run = async (bot, message, args, BotCommands) => {
    let helpembed = new Discord.RichEmbed()
    .setColor("#00d2ff")
    .addField("Commands", "/" + BotCommands.join("\n/"))
    await message.channel.send(helpembed)//"Here is the commands: \n/" + BotCommands.join("\n/"));
}

module.exports.help = {
    name: "help"
}
