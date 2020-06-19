const Discord = new require('discord.js')
const superagent = require('superagent')

exports.run = async (client, message, args) => {
    let membro2 = message.mentions.members.first()
    if (!membro2) message.channel.send('Você não mencionou um membro');

    const {body} = await superagent
       .get(`https://nekos.life/api/v2/img/tickle`)

    let embed = new Discord.MessageEmbed()
        .setTitle(`🤭 Cócega 🤭`)
        .setDescription(`Muahaha! ${message.author} fez cócegas no ${membro2} 😹`)
        .setImage(body.url)
        .setFooter('Olha que maldade 👀', client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

exports.help = {
    name: "cocega",
    aliases: ['cocega', 'cócega']
}