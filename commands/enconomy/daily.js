const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('pretty-ms');

module.exports ={
    name: "daily",
    run: async(client, message, args) =>{

        var timeout = 86400000
        var amount = Math.floor(Math.random() * 1000) +1;


        var daily = await db.fetch(`daily_${message.author.id}`);


        if(daily !== null && timeout - (Date.now() - daily ) > 0) {
            var time = ms(timeout - (Date.now() - daily));

            message.channel.send(`Már megkaptad a napi jutalmadat!`)
        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Napi`, message.author.displayAvatarURL)
            .setColor(0xff00dd)
            .setDescription(`Napi jutalom`)
            .addField(`Összeg:`, amount)


            message.channel.send(embed)
            db.add(`money_${message.author.id}`, amount)
            db.set(`daily_${message.author.id}`, Date.now())

        }

    }
}