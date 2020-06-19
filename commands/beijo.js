const Discord = new require('discord.js')
const superagent = require('superagent')

exports.run = async (client, message, args) => {
    let membro2 = message.mentions.members.first()
    if (!membro2) message.channel.send('Você não mencionou um membro');

    const {body} = await superagent
       .get(`https://nekos.life/api/v2/img/kiss`)

    let embed = new Discord.MessageEmbed()
        .setTitle(`💏 Beijo 💏`)
        .setDescription(`${message.author} Tacou-lhe um beijo em ${membro2} 💋`)
        .setImage(body.url)
        .setFooter('O amor está fluindo ❣️', client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

exports.help = {
    name: "beijo",
    aliases: ['beijo', 'beijar', 'kiss']
}