const { MessageEmbed } = require('discord.js')
const db = require('quick.db') 
module.exports = {
    name: "warn",
    run: async (client, message, args) =>{
        let prefix = "?"

        const user = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Ehhez nincs jogod!")
        if(!user) return message.reply('') 
        let reason = args.slice(1).join(' ') 
        if(!reason) reason = 'Nincs megadva' 

        const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} Figyelmeztetve`, user.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        .setDescription(`
<@${user.id}> Figyelmeztettve lettél ezzel az indokkal: "**${reason}**"!  <@${message.author.id}> által
        `)
        .setFooter(`${botname}`)
        message.channel.send(embed)
        db.add(`warns_${message.guild.id}_${user.id}`, 1)
        setTimeout(() => message.delete(), 3000);  
    }
}