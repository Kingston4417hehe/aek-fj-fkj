const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('pretty-ms');

module.exports ={
    name: "monthly",
    run: async(client, message, args) =>{

        var timeout = 2592000000
        var amount = Math.floor(Math.random() * 1000) +1;


        var monthly = await db.fetch(`monthly_${message.author.id}`);


        if(monthly !== null && timeout - (Date.now() - monthly ) > 0) {
            var time = ms(timeout - (Date.now() - monthly));

            message.channel.send(`Már megkaptad a havi jutalmadat!`)
        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Napi`, message.author.displayAvatarURL)
            .setColor(0xff00dd)
            .setDescription(`Napi jutalom`)
            .addField(`Összeg:`, amount)


            message.channel.send(embed)
            db.add(`money_${message.author.id}`, amount)
            db.set(`monthly_${message.author.id}`, Date.now())

        }

    }
}