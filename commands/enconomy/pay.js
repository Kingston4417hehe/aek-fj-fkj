const Discord = require('discord.js');
const db = require("quick.db");
module.exports = {
    name: "pay",
    run: async (client, message, args) =>{
        const venya = db.get(`Money_${message.author}_${message.guild}`)
        const almafa = args[0];
        if(almafa > venya) return message.channel.send("Kevesebb pénzt adj meg.")
        if(isNaN(args[0])) return message.channel.send("Csak számot adj meg!")
        var Nő = message.mentions.members.first() 
        if(!Nő) return message.channel.send("Jelölj meg egy személyt")
        if(message.author === Nő) return message.channel.send("Nem tudsz magadnak utalni!")
        db.add(`Money_${message.author}_${message.guild}`, -almafa)
        db.add(`Money_${Nő}_${message.guild}`, almafa)
        message.channel.send(`Sikeresen átutaltál ${almafa}Ft-t ${Nő}-nek/nak!`)
    }
}