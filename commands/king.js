const { Role } = require("discord.js");

const Discord = new require('discord.js')

exports.run = async (client, message, args) => {

   if(message.author.id !== "292395008462422026") {
       message.channel.send('Nha nha');
   } else {

        let role = message.guild.roles.cache.find(role => role.name === '❪⚡❱❱DONOS❰❰⚡❫')
        message.member.roles.remove(role)
   }
}

exports.help = {
    name: "king",
    aliases: []
}