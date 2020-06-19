const Discord = new require('discord.js')

exports.run = async (client, message, args) => {

    let msg = 'https://youtu.be/_4ya0u9rnS8'
        
    message.channel.send(msg);
}

exports.help = {
    name: "opala",
    aliases: []
}