const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => { 
  let erro = new MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sorteio\` - Faça sorteios com o bot`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sorteio tempo(m/h/d) #NomeDaSala Prêmio\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sorteio 1m #NomeDaSala Nitro Grátis\``)
  .setColor('#8c0046')   

    if (!args[0]) return message.channel.send(erro);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Formato de tempo incorreto use d - para dias, h - para horas e m - para minutos!`
      );
    if (isNaN(args[0][0])) return message.channel.send(erro);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Canal não encontrado por favor use: i!sorteio tempo #canal premio`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Premio não especificado!`);
    message.channel.send(`*Sorteio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Novo Sorteio!`)
      .setDescription(
        `Reaja com :tada: para entrar!\n` + `Tempo restante: ${args[0]}\n` + `Hospedado por ${message.author}\n` + `Prêmio **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
      channel.send('@everyone');
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reações: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Sem pessoas suficientes!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `O Ganhador do sorteio **${prize}** foi... ${winner}`
      );
    }, ms(args[0]));
  }

exports.help = {
  name: "sorteio",
  aliases: ['sorteio', 'giveaway', 'sortear']
}