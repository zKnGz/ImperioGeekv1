const Discord = require('discord.js')
const moment = require("moment");
moment.locale('pt-BR') 

exports.run = (client, message, args) => { 
    
    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    function checkBots(guild) { 
        let botCount = 0;
        guild.members.cache.forEach(member => { 
            if (member.user.bot) botCount++; 
        });
        return botCount;
    }

    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if (!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    let embed = new Discord.MessageEmbed()
        .setTitle('🔍 Informações do servidor')
        .addField('📄 __**Nome**__', `${message.guild.name}`,true)
        .addField('📰 __**ID**__', `${message.guild.id}`, true)
        .addField('👑 __**Dono do Server**__', `${message.guild.owner}`, false)
        .addField('🏳️ __**Região**__', `:flag_br: Brasil`, false)
        .addField('👦 __**Humanos |**__ 🤖 __**Bots**__', `${checkMembers(message.guild)} | ${checkBots(message.guild)}`, false)
        .addField('🎲 __**Canais**__', `${message.guild.channels.cache.size}`, false)
        .addField('🧩 __**Cargos**__', `${message.guild.roles.cache.size}`, false)
        .addField('🔧 __**Criado em**__',`\`${moment(message.guild.createdAt).format("LLL")}\``)
        .addField('🎟️ __**Entrou aqui em**__',`\`${moment(membro.joinedAt).format("LLL")}\``)
        .setThumbnail(message.guild.iconURL())
        .setColor("#72C635").setTimestamp()

        message.channel.send(embed)
};

exports.help = {
    name: "serverinfo",
    aliases: ['serverinfo', 'server']
}