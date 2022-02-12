const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('pretty-ms');

module.exports ={
    name: "weakly",
    run: async(client, message, args) =>{

        var timeout = 604800000
        var amount = Math.floor(Math.random() * 1000) +1;


        var weakly = await db.fetch(`weakly_${message.author.id}`);


        if(weakly !== null && timeout - (Date.now() - weakly ) > 0) {
            var time = ms(timeout - (Date.now() - weakly));

            message.channel.send(`Már megkaptad a heti jutalmadat!`)
        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Napi`, message.author.displayAvatarURL)
            .setColor(0xff00dd)
            .setDescription(`Napi jutalom`)
            .addField(`Összeg:`, amount)


            message.channel.send(embed)
            db.add(`money_${message.author.id}`, amount)
            db.set(`weakly_${message.author.id}`, Date.now())

        }

    }
}