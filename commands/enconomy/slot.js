const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: "slot",
    aliases: ["slotmachine", "szerencsekerék", "szerencsejáték"],
    run: async(client, message, args) =>{
     const fasz = db.get(`Money_${message.author}_${message.guild}`)
     const almafa = args[0];
     if(almafa > fasz) return message.channel.send("Kevesebb pénzt adj meg.")
     if(isNaN(args[0])) return message.channel.send("Csak számot adj meg!")

        const munkak = ["🍆","🍎","🍇","🍑"]
        
                const munka = munkak[Math.floor(Math.random() * munkak.length)];
                const munka2 = munkak[Math.floor(Math.random() * munkak.length)];
                const munka3 = munkak[Math.floor(Math.random() * munkak.length)];
                if (munka === munka2 && munka3){
                    var Nyerés = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("Nyertél")
                    .addField(`Eredményed:`, `${munka},${munka2},${munka3}`)
                    .addField(`Nyereményed:`, almafa*1.7)
                    message.channel.send(Nyerés)
                    db.add(`Money_${message.author}_${message.guild}`, almafa*1.7)
                } else {
                    var Vesztés = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Vesztettél")
                    .addField(`Eredményed:`, `${munka},${munka2},${munka3}`)
                    .addField(`Buktál:`, almafa)
                    
                    message.channel.send(Vesztés)
                    db.add(`Money_${message.author}_${message.guild}`, -almafa)
                }
    }
}