const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM
  
    message.reply('verifique suas mensagens privadas...')


     const embed = new Discord.MessageEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🤖 `Bot` \n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🤖').then(r => { // bot
            msg.react('🔨').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('💳').then(r => { // entretenimento
            msg.react('🔙').then(r => { // inicio
            })
        })
      })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const BotFilter = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
        const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const BackFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Bots = msg.createReactionCollector(BotFilter);
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);

        Bots.on('collect', r2 => {
         const embed = new Discord.MessageEmbed()
          .setTitle('🤖 BOT')
          .addField(`\`i!botinfo\``, `Saiba mais sobre mim`)
          .addField(`\`i!setprefix\``, `Troque o prefixo do bot`)
          
          msg.edit(embed)
        }) 

        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            const embed = new Discord.MessageEmbed()
                .setTitle("🔧 ÚTEIS")
                .addField(`\`i!userinfo\``, `Use i!userinfo @NomeDeAlguém para informações`)
                .addField(`\`i!serverinfo\``, `Use para saber informações do servidor`)
                .addField(`\`i!clima\``, `Veja o clima de alguma cidade`)
                .addField(`\`i!lembrar\``, `Peça ajuda ao bot para lembrar você de algo`)
                .addField(`\`i!ontime\``, `Veja a quanto tempo o bot se encontra online`)
                .addField(`\`i!sugestão\``, `Deixe uma sugestão para o nosso servidor`)
                .addField(`\`i!calculo\``, `Faça o calculo de uma conta`)
                .addField(`\`i!ticket\``, `Crie um chat direto com os staffs`)
                .addField(`\`i!comandos\``, `Saiba todos comandos do bot`)

                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("👮 MODERAÇÃO")
                .addField(`\`i!ban\``, `Aplique um banimento em um pessoa`)
                .addField(`\`i!mute\``, `Use para mutar uma pessoa`)
                .addField(`\`i!unmute\``, `Use para desmutar uma pessoa`)
                .addField(`\`i!templock\``, `Bloqueie algum chat por um tempo determinado`)
                .addField(`\`i!slowmode\``, `Coloca o chat em modo lento pelo tempo definido`)
                .addField(`\`i!clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`i!report\``, `Use para reportar um usuário`)
                .addField(`\`i!warn\``, `Use para dar um aviso a um usuário`)
                .addField(`\`i!warnstaff\``, `Use para dar um aviso na staff`)
                .addField(`\`i!anuncio\``, `Use para anunciar algo com o bot`)
                .addField(`\`i!sorteio\``, `Use para sortear algo com o bot`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("💳 ENTRETENIMENTO")
                .addField(`\`i!say\``, `Fale pelo bot`)
                .addField(`\`i!roleta\``, `Jogue Roleta Russa`)
                .addField(`\`i!ppt\``, `Jogue Pedra Papel e Tesoura`)
                .addField(`\`i!ping\``, `Use para descobrir seu ping`)
                .addField(`\`i!laranjo\``, `Faça seu meme do Laranjo`)
                .addField(`\`i!dado\``, `Jogue um dado 1d10`)
                .addField(`\`i!conquista\``, `Faça uma conquista do Minecraft`)
                .addField(`\`i!avatar\``, `Baixe o avatar de alguém`)
                .addField(`\`i!pergunta\``, `Me faça uma pergunta`)
                .addField(`\`i!tapa\``, `De um tapa em alguém`)
                .addField(`\`i!abraçar\``, `Abraçe alguém`)
                .addField(`\`i!loli\``, `Pegue seu avatar de loli`)
                .addField(`\`i!cocega\``, `Faça cócegas em alguém`)
                .addField(`\`i!beijo\``, `De um beijo em alguém`)
                .addField(`\`i!cafuné\``, `De um cafuné em alguém`)
                .addField(`\`i!comida\``, `De comida para alguém`)
                .addField(`\`i!catucar\``, `De uma catucada em alguém`)
                .addField(`\`i!cavalo\``, `CAVALO MEME`)
                .addField(`\`i!opala\``, `OPALA MEME`)
                .addField(`\`i!reverter\``, `Rerverter a frase`)
                .addField(`\`i!mchead\``, `Para pegar uma cabeça de minecraft`)
                .addField(`\`i!bigtext\``, `Para escrever em texto grande`)
                .addField(`\`i!carinha\``, `Para mandar umas carinha ai`)
                .addField(`\`i!firstword\``, `Fazer um meme de primeiras palavras`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🤖 `Bot` \n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
            
           msg.edit(embed);  
        });
    });
}

exports.help = {
    name: 'ajuda',
    aliases: ['ajuda', 'help']
}