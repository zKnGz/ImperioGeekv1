const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Você não tem permissão!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Sem permissões");
      }
      const user = message.mentions.members.first();

        if (!user) {
        return message.channel.send(
            "Mencione um usuário para desmutar"
        );
        }

        let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
    
    
    if(user.roles.cache.has(muterole)) {
        return message.channel.send("Este usuário não está mutado")
        }

        user.roles.remove(muterole)

                let embed = new Discord.MessageEmbed()
                .setTitle("🚫 Império Desmutes 🚫", message.author.avatarURL)
                .setThumbnail(message.author.avatarURL)
                .addField("📋Staff Tag", message.author.tag, true)
                .addField("Staff ID", message.author.id, false)
                .addField("📋Membro Tag", message.mentions.members.first(), false)
                .addField("Membro ID", message.mentions.members.first().id, false)
                .setColor("RANDOM").setTimestamp()
                
                client.channels.cache.get('712451499564728380').send(embed)
    
                user.send(`Você foi desmutado do **${message.guild.name}**`)
        }

exports.help = {
    name: 'unmute',
    aliases: ['unmute', 'desmutar']
  }