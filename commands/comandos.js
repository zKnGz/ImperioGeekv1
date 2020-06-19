const Discord = require("discord.js")
//const fetch = require('node-superfetch');
 
module.exports.run = async (bot, message, args, db) => {
  let comandos = bot.commands
  //console.log(comandos)
  
let cmd = []
  comandos.forEach(async c => {
  // message.channel.send(c.help.name)
  //  console.log(c.help.name)
    cmd.push(c.help.name)
  })
  let embed = {
    author: {
      name: "Comandos",
      icon_url: "https://cdn.discordapp.com/attachments/708353509036392458/709195492617093210/08aa018fe5d7bf5d76fa70f77536dbeb.gif"
    },
    description: cmd.join("\n"),
    color: 0x00008B,
    thumbnail: {
      url: "https://cdn.discordapp.com/attachments/708353509036392458/709195492617093210/08aa018fe5d7bf5d76fa70f77536dbeb.gif"
      
    },
    footer: {
      text: "🔧| Esses são todos os meus comandos",
    }
  }
 await message.channel.send({embed: embed})
} 

exports.help = {
  name: "comandos",
  aliases: ["comando","commands", "command", "comandos", "cmds", "cmd"]
}