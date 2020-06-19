const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var numero = Math.floor(Math.random() * 6) + 1;

    message.channel.send(`Você jogou o dado e... Caiu em: \`${numero}\``)
}

exports.help = {
    name: 'dado',
    aliases: []
}