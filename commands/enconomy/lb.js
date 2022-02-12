const Discord = require("discord.js")
const db = require('quick.db');

module.exports = {
        name: "leaderboard",
        description: 'server\'s $ leaderboard',
        aliases: ['lb'],
    }
    module.exports.run = async (bot, message, args) => {
        let money = db.all().filter(data => data.ID.startsWith(`kezpenz_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("BLUE")
                .setFooter("No leaderboard")
            return message.channel.send(noEmbed)
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            let currency1;
            let fetched = await db.fetch(`kezpenz_${message.guild}`);
            if (fetched == null) {
                currency1 = '🎱'
            } else {
                currency1 = fetched
            }
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${message.guild.members.cache.get(money[i].ID.split('_')[1]) ? message.guild.members.cache.get(money[i].ID.split('_')[1]).tag : `fasz`}** - ${money[i].data} ${currency1}\n`;
        };

        const embed = new Discord.MessageEmbed()
            .setTitle(message.guild.name)
            .setColor("BLUE")
            .setDescription(finalLb)
            .setTimestamp()
        message.channel.send(embed);
    }