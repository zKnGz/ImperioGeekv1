const Discord = new require('discord.js')
const superagent = require('superagent')

exports.run = async (client, message, args) => {
    //membro2 = message.mentions.members.first()
    //if (!membro2) return;

    const {body} = await superagent
       .get(`https://nekos.life/api/v2/img/avatar`)

    let embed = new Discord.MessageEmbed()
        .setTitle(`⚠️ Conteúdo Privado ⚠️`)
        .setImage(body.url)
        .setFooter('lolizinha :3', client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

exports.help = {
    name: "loli",
    aliases: []
}