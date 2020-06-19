const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let date = client.user.createdAt
    let embed = new Discord.MessageEmbed()
    .setColor([28, 255, 103])
    .setAuthor("Informação do Bot") // message.author.avatarURL - Pegar do usuário que digitou o cmd
    .setDescription("**Bot Maker:** zKinG#6890")
    .addField("Servidores", ":desktop: " + client.guilds.cache.size, true)
    .addField("Usuários", ":joystick: " + client.users.cache.size, true)
    .addField("Canais", ":page_facing_up: " + client.channels.cache.size, true)
    .addField("Versão do bot", "2.0", true)
    .addField("País", ":flag_br: Brasil", true)
    .addField("Livraria", ":books: discord.js", true)
    //.addField("Criado em", ":inbox_tray: " + client.user.createdAt, true)
    .addField('Criado em', ":inbox_tray: " + formatDate('DD/MM/YYYY, às HH:mm:ss', date))
    .setFooter(client.user.username, client.user.displayAvatarURL()) // para pegar o bot name: client.user.username
    // sendo message.author | client.user / pega o id do author e o id do bot
    .setTimestamp();
    
    message.channel.send(embed);
  
    /**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
  }
}

exports.help = {
  name: 'botinfo',
  aliases: ['botinfo', 'bot']
}