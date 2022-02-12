const Discord = require('discord.js')

module.exports = {
    name: "simp",
    run: async(client, message, args) => {
        const mentionedMember = message.mentions.users.last()
        if (!mentionedMember) return message.channel.send('Kérlek említs meg egy embert!')
        const simpr8 = Math.floor(Math.random() * 100) + 0;
        const embed = new Discord.MessageEmbed()
           .setTitle(`Simp% gépezet`)
           .setDescription(`:shrimp:  ${mentionedMember} is ${simpr8}% simp`)
           .setColor(`RANDOM`)
           message.channel.send(embed)
    }
}