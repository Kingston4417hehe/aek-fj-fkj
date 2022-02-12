const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
        name: "setnick",
        aliases: ["sn"],
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Nincs jogod ehhez a parancshoz**");

        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**Nincs jogom ehhez a parancshoz**");
      
        if (!args[0]) return message.channel.send("**Kérlek adj meg egy felhasználót**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send("**Kérlek adj meg egy nevet**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Ennek a személynek nem tudom megváltoztatni a becenevét**')

        if (!args[1]) return message.channel.send("**Kérlek írj be egy nevet**");

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**Becenév megváltoztatva erről ${member.displayName} erre ${nick}**`)
            .setAuthor(message.guild.name, message.guild.iconURL())
        message.channel.send(embed)
        } catch {
            return message.channel.send(" :x:Nincs jogod hozzá!:x:")
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "setnick")
            .addField("**Becenév megváltoztatva erről**", member.user.username)
            .addField("**Becenév megváltoztatója**", message.author.username)
            .addField("**Új becenév**", args[1])
            .addField("**Dátum**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed)
    }
}