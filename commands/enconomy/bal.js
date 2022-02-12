const Discord = require('discord.js');
const db = require('quick.db');
 
module.exports = {
    name: "bal",
    aliases: ["balance", "egyenleg"],
    run: async(client, msg, args) =>{

        let balance = db.get(`Money_${msg.author}_${msg.guild}`)
        let balanceEmbed = new Discord.MessageEmbed()
        .addField(`Összes pénzed`, `${balance}`)
        .setColor("#ff00dd")
        msg.channel.send(balanceEmbed);
    }
}