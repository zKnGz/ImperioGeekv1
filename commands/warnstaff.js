const Discord = require('discord.js') // Puxando a livraria Discord.js
const fs = require('fs');
const ms = require('ms');
const c = require('../config.json')
let warnstaff = JSON.parse(fs.readFileSync("./warningstaff.json", "utf8"));

exports.run = async (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`warnstaff\` - Dê Aviso a um usuário`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}warnstaff @nomedousuario motivo\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}warnstaff @zKinG#6890 lindao\``)
  .addField(`:bookmark: **Permissão**`, `\`MANAGE_MESSAGES\``)
  .setColor('#8c0046') 

    var canal = client.channels.cache.get('715993908018020425'); // Puxando o canal aonde iremos enviar que o usuário tomou um warn 
  // Requisitando a permissão de Administrador
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`apenas administradores podem utilizar esse comando!`)
    // Puxando o usuário que iremos dar o Warn
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]); // puxando do argumento zero (0)
     // if (membro === message.member) return message.reply(`mencione alguém que não seja você mesmo!`) // caso ele mencione a si memso

    if(!membro)
      return message.reply(erro);

    var motivo = args.join(' ').slice(22); // Puxando o motivo do warn
    if (!motivo) return message.reply(`escreva alguma coisa para esse warn`); // Caso ele não escreva o motivo

    if(!warnstaff[membro.id]) warnstaff[membro.id] = {
      warnstaff: 0
    };

    warnstaff[membro.id].warnstaff++;

    fs.writeFile("./warningstaff.json", JSON.stringify(warnstaff), (err) => {
      if (err) console.log(err);
    });

    //
    // Embed do Warn, enviado no canal 
    let embedi = new Discord.MessageEmbed()

    .setTitle(`:hammer: Warn`)
    .addField("Usuário Avisado:", `<@${membro.id}>`)
    .addField("Quantia de Avisos:", warnstaff[membro.id].warnstaff)
    .addField("Motivo do Aviso:", motivo)
    .setColor("#8B0000")
    .setDescription(`**${membro.user.username}** tomou um **Warn** de **${message.author.username}**!\n\n`)
    // Enviando no privado do usuário
    let embed = new Discord.MessageEmbed()

    .setTitle(`:warning: Warn`)
    .setDescription(`${motivo}`)
    .setFooter(`Aviso dado pelo Staff: ${message.author.username}`)

    //
    membro.send(embed); // Enviando pro usuário
    canal.send(embedi); // Enviando no canal
    message.delete();

    if(warnstaff[membro.id].warnstaff == 1) {
      membro.roles.add("717449610196680765")

      let reset = "3d";

      setTimeout(function() {
        membro.roles.remove("717449610196680765")
        warnstaff[membro.id].warnstaff--;
      }, ms(reset));
    }

    if(warnstaff[membro.id].warnstaff == 2) {
      membro.roles.remove("717449610196680765")
      membro.roles.add("717449886668423192")

      let reset = "3d";

      setTimeout(function() {
        membro.roles.remove("717449886668423192")
        warnstaff[membro.id].warnstaff--;
        warnstaff[membro.id].warnstaff--;
      }, ms(reset));
    }
    
    if(warnstaff[membro.id].warnstaff == 3) {
      membro.roles.remove("717449886668423192")
      membro.roles.add("717450391750574143")
      
      let reset = "3d";

      setTimeout(function() {
        membro.roles.remove("717450391750574143")
        warnstaff[membro.id].warnstaff--;
        warnstaff[membro.id].warnstaff--;
        warnstaff[membro.id].warnstaff--;
      }, ms(reset));
    }
  
    if(warnstaff[membro.id].warnstaff == 4) {
      membro.roles.remove("717450391750574143")
      membro.roles.add("718693690435960843")
      message.channel.send(`<@${membro.id}> será rebaixado por Levar 4 Avisos.`)

      let reset = "3d";

      setTimeout(function() {
        membro.roles.remove("718693690435960843")
        warnstaff[membro.id].warnstaff--;
        warnstaff[membro.id].warnstaff--;
        warnstaff[membro.id].warnstaff--;
        warnstaff[membro.id].warnstaff--;
      }, ms(reset));
    }
  
    if(warnstaff[membro.id].warnstaff == 5) {
      message.guild.member(membro).ban(motivo);
      message.channel.send(`<@${membro.id}> foi banido por Levar 5 Avisos.`)
    }
}

exports.help = {
    name: 'warnstaff',
    aliases: []
}
