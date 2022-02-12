const Discord = require('discord.js');
const db = require('quick.db');

module.exports ={
    name: "antispam",
    run: async(client, message, args) =>{
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs hozzá jogod')
        if(args[0] === `on`) {
            await db.set(`antispam-${message.guild.id}`, true)
            message.channel.send(`Antispam rendszer bekapcsolva`)
        } else if(args[0] === `off`) {
            await db.delete(`antispam-${message.guild.id}`)
            message.channel.send(`Antispam rendszer kikapcsolva`)
        }
    }
}