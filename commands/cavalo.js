const Discord = new require('discord.js')

exports.run = async (client, message, args) => {

    let msg = 'https://youtu.be/NSniuNxgzHk'
        
    message.channel.send(msg);
}

exports.help = {
    name: "cavalo",
    aliases: []
}