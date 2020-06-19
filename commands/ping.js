const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    const m = await message.channel.send("Calculando...");
    m.edit(`🏓 **|** ${message.author} **Pong!**\n ⏱️ **| Gateway Ping:** \`${m.createdTimestamp - message.createdTimestamp}ms.\` \n ⚡ **| API Ping:** \`${Math.round(client.ws.ping)}ms.\``)
}

exports.help = {
    name: 'ping',
    aliases: []
  }