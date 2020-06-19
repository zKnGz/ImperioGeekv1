const Discord = require('discord.js');

exports.run = (client, message, args) => { 
    let afirm = ["Se você diz, então eu acredito", "Certeza?", "Entendo", "Discordo", "Concordo", "Tem razão", "Que informação util!", "Por que afirma isso?"]
    let rdm = Math.floor(Math.random() * afirm.length)
    if (args[0] == null || args[0] == undefined) return
    if (!args.join(" ").includes("?")) return message.channel.send(afirm[rdm])

    let resp = ["Acho que sim", "talvez", "Não", "Jamais!", "Tenho certeza!", "Pergunta dificil... Não sei a resposta correta", "Acho que... Sim?"]
    let random = Math.floor(Math.random() * resp.length)
    message.channel.send(resp[random])
}

exports.help = {
    name: 'pergunta',
    aliases: ['perg', 'ask']
  }