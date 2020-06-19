const Discord = require('discord.js');
const { promptMessage } = require("../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

exports.run = async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("Clique na reação dos emoji para jogar")
            .setTimestamp();
        
        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);
        
        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Você Ganhou!";
                } else if (me === clientChosen) {
                    return "Empate!";
                } else {
                    return "Você perdeu!"
                }
        }
}

exports.help = {
    name: 'ppt',
    aliases: []
  }