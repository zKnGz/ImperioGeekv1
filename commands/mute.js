const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(
          "Você não tem permissão!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Sem permissões.");
      }
    
      const user = message.mentions.members.first();

      if (!user) {
        return message.channel.send(
          "Mencione quem você deseja mutar"
        );
      }
   
      if(user.id === message.author.id) {
        return message.channel.send("Eu não vou silenciar você -_-");
      }

      let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Razão não especificada")
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
    
    
      if(!muterole) {
      return message.channel.send("Este servidor não tem o cargo `Silenciado`")
    }

    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Usuário já está mutado.")
      }

    user.roles.add(muterole)

    let embed = new Discord.MessageEmbed()
        .setTitle("🚫 Império Mutes 🚫", message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        .addField("📋Staff Tag", message.author, true)
        .addField("📋Membro Tag", message.mentions.members.first(), false)
        .addField("📝Motivo:", reason, true)
        .setColor("RANDOM").setTimestamp()

        client.channels.cache.get('712451499564728380').send(embed)
    
    user.send(`Você está mutado em **${message.guild.name}** Pela razão \`${reason}\``)
}

exports.help = {
    name: 'mute',
    aliases: ['mute', 'mutar']
  }