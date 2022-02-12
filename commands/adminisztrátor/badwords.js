const Discord = require('discord.js');
const db = require('quick.db');

module.exports ={
    name: "badwords",
    run: async(client, message, args) =>{
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Nincs hozzá jogod')
        if(args[0] === `on`) {
            await db.set(`badwords-${message.guild.id}`, true)
            message.channel.send(`Badwords rendszer bekapcsolva`)
        } else if(args[0] === `off`) {
            await db.delete(`badwords-${message.guild.id}`)
            message.channel.send(`Badwords rendszer kikapcsolva`)
        }
    }
}