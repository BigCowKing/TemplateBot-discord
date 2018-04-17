const Discord = require("discord.js")
const config = require("./JSON/config.json")
const fs = require("fs")

const bot = new Discord.Client()

bot.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(File => File.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Cant find commands!");
    return;
  }

  jsfile.forEach((file, i) => {
    let props = require(`./Commands/${file}`);
    console.log(`${file} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
    console.log([bot.user.username] + " is ready and online!")
})

bot.on("message", async message => {
    if(message.author.bot) return;
    
    if(message.channel.type === "dm"){
        message.reply("Sorry you cant use this bot in DM")
    }


    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1)
    let command = messageArray[0];

    if (message.channel.type !== `dm`){
  
        let PREFIX = config.prefix
        let commandfile = bot.commands.get(command.slice(PREFIX.length).toLowerCase());

        if (message.content.startsWith(PREFIX)){
            if(commandfile) commandfile.run(bot,message,args);
        }
    }
})

bot.login(config.token)