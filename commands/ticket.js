const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor("#cd3")
    .setAuthor("Suporte do Servidor")
    .setDescription("Crie um ticket, adicionando a reação")
    .setFooter("Suporte do Servidor")

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("🎟️")
    })
}

exports.help = {
    name: "ticket",
    aliases: []
}