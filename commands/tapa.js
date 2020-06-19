const Discord = new require('discord.js')
const superagent = require('superagent')

exports.run = async (client, message, args) => {
    let membro = message.mentions.members.first()
    if (!membro) return message.channel.send('Você não mencionou um membro');

  const {body} = await superagent
       .get(`https://nekos.life/api/v2/img/slap`)
  
    let embed = new Discord.MessageEmbed()
        .setTitle(`✋ Tapa ✋`)
        .setDescription(`Ouush! ${message.author} deu um tapa no ${membro} 💔`)
        .setImage(body.url)
        .setFooter('Woooooow 👀', client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

exports.help = {
    name: "tapa",
    aliases: ['tapa', 'slap', 'soco']
}