const Discord = new require('discord.js')
const superagent = require('superagent');
const { ClientUser } = require('discord.js');

exports.run = async (client, message, args) => {

   if(message.author.id !== "625845383142047744") {
       message.channel.send('Apenas o †Joaopoleitte† pode usar o comando');
   } else {
        const {body} = await superagent.get(`https://nekos.life/api/v2/img/Random_hentai_gif`)
        let embed = new Discord.MessageEmbed()
            .setTitle(`⚠️ Conteúdo Privado ⚠️`)
            .setImage(body.url)
            .setFooter('Comando privado do João ;3', client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setTimestamp()
            
        message.channel.send(embed);
   }
}

exports.help = {
    name: "lolicon",
    aliases: []
}