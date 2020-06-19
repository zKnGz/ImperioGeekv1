const Discord = require('discord.js');

exports.run = (client, message, args) => { 
        message.delete();
        
        if (args.length < 0)
            return message.reply("Nada a dizer?").then(m => m.delete(5000));

        const roleColor = message.guild.me.roles.highest.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new Discord.MessageEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
}

exports.help = {
    name: 'say',
    aliases: ['say', 'falar']
  }