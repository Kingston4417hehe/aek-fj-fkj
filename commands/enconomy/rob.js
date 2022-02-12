const db = require('quick.db');
const Discord = require('discord.js');
const { random } = require('mathjs');

module.exports ={
    name: "rob",
    run: async(client, message, args) =>{
        var user = message.mentions.members.first()
        var targetuser = await db.fetch(`money_${user.id}`)
        var author = await db.fetch(`money_${message.author.id}`)

        if(author < 250) {
            return message.channel.send(':x: 250FT-nak kell lennie a számládon ahhoz hogy ki tudj rabolni egy másik embert')
            
        
        }
        if(targetuser < 0) {
            return message.channel.send(`:x: ${user.user.username}-nek nincsen a számláján olyan összeg amit el lehetne lopni`)
        
        
        }

        var random = Math.floor(Math.random() * 200) +1;


        var embed = new Discord.MessageEmbed()
        .setDescription(`${message.author} kirabolta ${user}t és ennyi lett a nyeresége ${random}!`)
        .setColor(0xff00dd)
        message.channel.send(embed)

        db.subtract(`money_${user.id}`, random)
        db.add(`money_${message.author.id}`, random)
    }
}