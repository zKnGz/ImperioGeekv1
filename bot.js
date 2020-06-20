const Discord = require("discord.js");
const config = require("./config.json"); 
const fs = require("fs"); 
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
//
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);

let arquivojs = files.filter(f => f.split(".").pop() == "js");
arquivojs.forEach((f, i) => {
  let props = require(`./commands/${f}`);
  console.log(`${f} - Comando iniciado`);
  client.commands.set(props.help.name, props);
  props.help.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
  });
});
});
//
client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`); 
  //client.user.setActivity(`ImpérioGeek\nBy: zKinG#6890`);
  //
  var tabela = [
    {name: 'ImpérioGeek discord.gg/yWXJ22X', type:'PLAYING'},
    {name: 'Criado por zKinG#6890', type: 'LISTENING'},
    {name: 'Entre já! discord.gg/yWXJ22X', type:'WATCHING'},
    {name: 'discord.gg/yWXJ22X!', type: 'STREAMING', url: 'https://twitch.tv/zking0d'}
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    client.user.setActivity(altstatus)
  }
  setStatus();
  setInterval(() => setStatus(), 5000)
});
//
client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores.`)
  .catch(error => console.log(error))
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores.`)
  .catch(error => console.log(error))
});

client.on('message', message => { // nome desse evento, foi setado como: message
  if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
  if (message.channel.type === "dm") return; // caso seja uma mensagem privada ao nosso bot, não retornaremos

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

  let prefix = prefixes[message.guild.id].prefixes;
  //let prefix = config.prefix; // puxando o prefixo do nosso bot
  var args = message.content.substring(prefix.length).split(" ");
   let cmd = args.shift().toLowerCase();
   if (!message.content.startsWith(prefix) || message.author.bot) return;

let command =
  client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
if (command) {
  command.run(client, message, args);
} else {
  message.reply(
    `não reconheci esse comando :thinking:`
  );
}
});
//
// COLETOR DE EMOJIS - https://prnt.sc/sw2c1m
//
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.guild.id !== "710215816867610654") return;
    
    if (reaction.message.channel.id === "711364783533719592") {
        // CATEGORIA PC OK | MOBILE OK | CONSOLE OK
        if (reaction.emoji.id === "710494556092628993") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717197432471027773")
        }
        if (reaction.emoji.id === "715631282016485376") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717197433872056321")
        }
        if (reaction.emoji.id === "710494560307904573") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717197434702528583")
        }
        // CATEGORIA ARTES OK | MEMÊS OK | RPG OK
        if (reaction.emoji.name === "🎨") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717196673478164481")
        }
        if (reaction.emoji.id === "714601693777625140") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717196674526740541")
        }
        if (reaction.emoji.name === "🎑") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("712707938808234125")
        }
        // CATEGORIA JOGO | ANIMES OK | SÓ CHAT | SÉRIES OK | FILMES OK
        if (reaction.emoji.name === "🎲") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("716008321504510055")
        }
        if (reaction.emoji.id === "710467796911259658") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("714668087328374916")
        }
        if (reaction.emoji.name === "🌎") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717196671821414452")
        }
        if (reaction.emoji.id === "717176775851114558") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717196674757427252")
        }
        if (reaction.emoji.name === "🎥") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("717196675155755061")
        }
        // CATEGORIA FINALIZAR
        if (reaction.emoji.name === "✅") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("713153000998436874")
            await reaction.message.guild.members.cache.get(user.id).roles.remove("710268788259684403")
        }
        // CATEGORIA +18
        if (reaction.emoji.name === "🔞") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("719710390757359697")
        }
        if (reaction.emoji.name === "🏰") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("722907575615750153")
        }
        } else if (reaction.message.channel.id === "722602606073085966") {
        
        if (reaction.emoji.name === "🧱") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("722960066466021446")
        }
          
        } else if (reaction.message.channel.id === "710219850936615003") {
        
        if (reaction.emoji.name === "👾") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("722998018135162931")
        }
        } else {
            return;
          }

  })

  client.on("messageReactionRemove", async (reaction, user) => {
    
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.guild.id !== "710215816867610654") return;
    
    if (reaction.message.channel.id === "711364783533719592") {
      // CATEGORIA PC OK | MOBILE OK | CONSOLE OK
      if (reaction.emoji.id === "710494556092628993") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717197432471027773")
    }
    if (reaction.emoji.id === "715631282016485376") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717197433872056321")
    }
    if (reaction.emoji.id === "710494560307904573") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717197434702528583")
    }
    // CATEGORIA ARTES OK | MEMÊS OK | RPG OK
    if (reaction.emoji.name === "🎨") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717196673478164481")
    }
    if (reaction.emoji.id === "714601693777625140") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717196674526740541")
    }
    if (reaction.emoji.name === "🎑") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("712707938808234125")
    }
    // CATEGORIA JOGO | ANIMES OK | SÓ CHAT | SÉRIES OK | FILMES OK
    if (reaction.emoji.name === "🎲") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("714668087328374916")
    }
    if (reaction.emoji.id === "710467796911259658") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("716008321504510055")
    }
    if (reaction.emoji.name === "🌎") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717196671821414452")
    }
    if (reaction.emoji.id === "717176775851114558") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717196674757427252")
    }
    if (reaction.emoji.name === "🎥") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("717196675155755061")
    }
    if (reaction.emoji.name === "🔞") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("719710390757359697")
    }
    if (reaction.emoji.name === "🏰") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("722907575615750153")
    }
    } else {
      return;
    }
  })
  //
  // DESCRIÇÃO SALA - https://prnt.sc/ss4lnu
  //
    client.on('guildMemberRemove', member => {
        let myGuild = client.guilds.cache.get('710215816867610654');
        let memberCountChannel = myGuild.channels.cache.get('717250126053244989') 
        let memberCount = memberCountChannel.guild.memberCount;
        memberCountChannel.setTopic(`**§ MEMBROS: ${memberCount} §**`)
        .catch(error => console.log(error))
    })
    client.on('guildMemberAdd', member => {
        let myGuild = client.guilds.cache.get('710215816867610654');
        let memberCountChannel = myGuild.channels.cache.get('717250126053244989') 
        let memberCount = memberCountChannel.guild.memberCount;
        memberCountChannel.setTopic(`**§ MEMBROS: ${memberCount} §**`)
        .catch(error => console.log(error))
    })
  //
  // BOAS VINDAS
  //

    client.on('guildMemberAdd', membro => {
        var canal = client.channels.cache.get("710219849640706142");
        let embedi = new Discord.MessageEmbed()
        
        .setTitle(`${membro.user.tag} **| Bem-vindo(a)!**`) 
        .setDescription(`✨ Olá, seja muito bem vindo(a) ao **IMPÉRIOGEEK**!`) 
        .setThumbnail(membro.user.displayAvatarURL())
        .setColor('GREEN') 
        .addFields(
            { name: '👋 Sabia que...', value: `Você é o ${membro.guild.memberCount}° membro aqui no servidor?`, inline: true},
            { name: '🛡️ Tag do Usuário', value: `\`${membro.user.tag}\` (${membro.id})`, inline: true },
            { name: '📛 Precisando de ajuda?', value: 'Caso você tenha alguma dúvida ou problema, chame alguém da staff ou vá ao #⸨📦⸩votação-e-sugestão!', inline: true },
            { name: '👮 Evite punições!', value: `Leia as nossas #⸨:scroll:⸩regras para evitar ser punido no servidor!`, inline: false }
        )
        .setFooter('IMPÉRIO GEEK • © Todos os direitos reservados.')
        //.addField(`**SOBRE**`, `:busts_in_silhouette: Usuários: \`${membro.guild.memberCount}\`\n<:DL_github:693136690801410178> Repositório: [Discord-Lab](https://github.com/young-js) \n<:DL_twitter:693132106255040671> Twitter: [@Discord_Lab](https://twitter.com/Discord_Lab)`)
        
        canal.send(`${membro}`, embedi)
    });

    client.on('guildMemberRemove', membro => {
        var canal = client.channels.cache.get("710219849640706142");
        
        let embed = new Discord.MessageEmbed()
        
        .setAuthor(membro.user.tag, membro.user.displayAvatarURL())
        .setDescription(`\n **😭 #chateado!** \n **⚰️ ${membro.displayName}** saiu do servidor...`)
        .setThumbnail(membro.user.displayAvatarURL())
        .setColor('RED')
        .setFooter(`ID do Usuário: ${membro.id}`)
    
        canal.send(embed)
    
    });    
  //
  // SISTEMA DE TICKET
  //

const cdseconds = 5;

client.on("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    const message = reaction.message;

    if(
        ["🎟️", "🔒"].includes(reaction.emoji.name)
    ) {
        switch(reaction.emoji.name) {

            case "🎟️":

            var TicketList = [
                "ticket-001",
                "ticket-002",
                "ticket-003",
                "ticket-004",
                "ticket-005",
                "ticket-006",
                "ticket-007",
                "ticket-008",
                "ticket-009",
                "ticket-010"
            ]

            let result = Math.floor((Math.random() * TicketList.length))

            let categoryID = "710219842833088602";

            var bool = false;

            if(bool == true) return;
           
            message.guild.channels.create(TicketList[result]).then(chan => {
               
              chan.setParent(categoryID);

                  chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    })
  
                    chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    })
  
                    chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "❪★❱Equipe Administrativa❪★❱"), {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true
                    })
              
                    chan.updateOverwrite(message.guild.roles.cache.find(s => s.name === "✧ ✧❱ᄽ»Suporte«ᄽ❰✧ ✧"), {
                              VIEW_CHANNEL: true,
                              SEND_MESSAGES: true
                          })
  
                    chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    })

                  let embedTicketOpen = new Discord.MessageEmbed()
                  .setTitle("Ticket Suporte,")
                  .setColor("#cd3")
                  .setDescription("Digite sua pergunta / mensagem abaixo")

                  chan.send(embedTicketOpen).then( async msg => {
                      await msg.react("🔒")
                  })
              })
          

            break;

            case "🔒":

            message.channel.send("**A sala fecha em 10 segundos ...**")

            setTimeout(() => {
                message.channel.delete()
            }, cdseconds * 1500)

            let embedTicketClose = new Discord.MessageEmbed()
            .setTitle(`O Ticket ${message.channel.name} foi fechado`)
            .setColor("#cd3")
            .setFooter("Aviso de fechamento de ticket")

            break;
        }
    }
})

client.login(config.token);
