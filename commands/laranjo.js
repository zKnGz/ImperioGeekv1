const Discord = require('discord.js');
var Jimp = require("jimp");

exports.run = async (client, message, args) => {

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.reply(`você precisa escrever a primeira palavra do bebê`) 
    } else { 
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.reply(`você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?`)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) { 
                var authorMessage = message
                message.channel.send('Processando...').then(message => { 

                    Jimp.read(`https://media.discordapp.net/attachments/689750456695914586/691077705071984710/295364123043211.png?width=540&height=482`, function (err, image) {
                        if (err) message.channel.send('Ocorreu um erro ao criar a imagem.') 
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { 
                            image.print(font, 23, 310, authorMessage.content.split(' ').slice(1).join(' '), 320) 
                            var aguardeMessage = message 
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => { 
                                const attachment = new Discord.MessageAttachment(buffer, 'laranjo.png') 
                                message.channel.send(attachment).then(message => { 
                                    aguardeMessage.delete() 
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('Eu não tenho a permissão necessária para fazer isso. `ATTACH_FILES`') // caso o bot nao possua permissao
            }
        }
    }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'laranjo',
    aliases: []
}