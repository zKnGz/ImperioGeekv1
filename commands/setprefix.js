const Discord = require("discord.js");
const fs = require("fs");
const c = require('../config.json')
 
exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`setprefix\` - Troque o prefixo do bot`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}setprefix [algumatecla] \``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}setprefix ;\``)
  .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
  .setColor('#8c0046')  

  if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("você não possui permissão para alterar o prefixo")
  if (!args[0] || args[0 == "help"]) return message.channel.send(erro)

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM").setTimestamp()
    .setTitle("Prefixo Alterado com Sucesso")
    .setDescription(`O Prefixo foi alterado para: ${args[0]}`);

    message.channel.send(embed)
}

exports.help = {
  name: "setprefix",
  aliases: ["setarprefixo","setprefix","prefix"]
}