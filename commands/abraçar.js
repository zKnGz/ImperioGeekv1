const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  let membro2 = message.mentions.members.first();
  if (!membro2) return message.channel.send("Você não mencionou um membro");

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/hug`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`🙆 Abraço 🙆`)
    .setDescription(`Awwn! ${message.author} deu um abraço no ${membro2} 🤗`)
    .setImage(body.url)
    .setFooter("Hugs hugs hugs :3", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);
};

exports.help = {
  name: "abraçar",
  aliases: ["abraçar", "abraço", "hug"]
};
