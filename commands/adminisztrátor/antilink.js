const Discord = require('discord.js');
const db = require('quick.db');

module.exports ={
    name: "antilink",
    run: async(client, message, args) =>{
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs hozzá jogod')
        if(args[0] === `on`) {
            await db.set(`antilink-${message.guild.id}`, true)
            message.channel.send(`Antilink rendszer bekapcsolva`)
        } else if(args[0] === `off`) {
            await db.delete(`antilink-${message.guild.id}`)
            message.channel.send(`Antilink rendszer kikapcsolva`)
        }
    }
}