const Discord = new require('discord.js')
const superagent = require('superagent')

exports.run = async (client, message, args) => {
    let membro2 = message.mentions.members.first()
    if (!membro2) return message.channel.send('Você não mencionou um membro');
  
  const {body} = await superagent
       .get(`https://nekos.life/api/v2/img/feed`)

    let embed = new Discord.MessageEmbed()
        .setTitle(`😮 Comidinha 😮`)
        .setDescription(`Nhami! ${message.author} deu comida para ${membro2} 🥺`)
        .setImage(body.url)
        .setFooter('Feeds feeds feeds :3', client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

exports.help = {
    name: "comida",
    aliases: ['comida', 'darcomida', 'food', 'givefood']
}