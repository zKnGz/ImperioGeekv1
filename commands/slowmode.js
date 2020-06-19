const Discord = require('discord.js');
const c = require('../config.json')

exports.run = async (client, message, args) => {
    let erro = new Discord.MessageEmbed()
        .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
        .setDescription(`\`slowmode\` - Coloque um chat em modo lento`)
        .addField(`:hammer: **Uso**`, `\`${c.prefix}slowmode tempo(segundos)\``)
        .addField(`:book: **Exemplo**`, `\`${c.prefix}slowmode 20\``)
        .setColor('#8c0046')

        if(!message.member.hasPermission("MANAGE_MESSAGES"))
          return(erro);
        if(!args[0]) return(erro);
        if(isNaN(args[0])) return(erro);

        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(`🔒 Modo lento setado para ${args[0]}`)
}

exports.help = {
    name: "slowmode",
    aliases: []
}