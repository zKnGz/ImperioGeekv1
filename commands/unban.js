const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    
    let reason = args.slice(1).join(' ');
    let user = args[0];
    if (!reason) return message.reply('Você não deu um motivo para desbanir.')
    if (!user) return message.reply('Você precisa me dar um ID ou Mencionar um membro para desbanir.').catch(console.error);
    message.guild.members.unban(user)

    let embed = new Discord.MessageEmbed()
        .setTitle("🚫 Império LOGS 🚫", message.author.avatarURL())
        .setThumbnail(message.author.avatarURL())
        .addField("🚨Membro Desbanido", `<@${args[0]}>`)
        .addField("📝Motivo:", reason)
        .addField('Data:', message.createdAt.toLocaleString())
        .setColor("RANDOM").setTimestamp()

    message.channel.send(embed)
}
exports.help = {
    name: 'unban',
    aliases: ['unban', 'desbanir']
}
