const Discord = require('discord.js');
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => {
    let erro = new Discord.MessageEmbed()
        .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
        .setDescription(`\`templock\` - Bloqueie salas de conversas por um tempo`)
        .addField(`:hammer: **Uso**`, `\`${c.prefix}templock tempo(s/m/h/d)\``)
        .addField(`:book: **Exemplo**`, `\`${c.prefix}templock 1m\``)
        .setColor('#8c0046')

        if (!args[0]) return message.channel.send(erro);
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
            return(erro);
        if (
            !args[0].endsWith("h") &&
            !args[0].endsWith("m") &&
            !args[0].endsWith("s")
          )
            return message.channel.send(
              `Formato de tempo incorreto use s - para segundos, m - para minutos e h - para horas!`
            );
        if (isNaN(args[0][0])) return message.channel.send(erro);

        message.channel.send(`🔒Chat trancado com sucesso por ${args[0]}`)

        let everyone = message.guild.roles.cache.find(x => x.name === "@everyone");
        message.channel.updateOverwrite(everyone, {
            SEND_MESSAGES: false
          })

        setTimeout(() => {
            message.channel.updateOverwrite(everyone, {
                SEND_MESSAGES: true
              })

              message.channel.send(`🔓Chat destrancado !. Agora todos podem falar novamente.`);
        }, ms(args[0]));
}

exports.help = {
    name: "templock",
    aliases: []
}