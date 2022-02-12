const Discord = require('discord.js');
module.exports ={
    name: "8ball",
    category: "fun",
    run: async (client, message, args) =>{
     
            if(!args[0]) return message.reply("Tegyél fel egy kérdést ")
         
            let replies = ["Igen", "Úgy néz ki, hogy Igen de nem biztos!", "Persze", "Soha", "Nem hiszem", "Jobb ha nem mondom most el", "Nem úgy néz ki", "Nem"]
    
            let result = Math.floor((Math.random() * replies.length));
         
            let question = args.slice().join(" ");
    
            let ballEmbed = new Discord.MessageEmbed()
         
            .setAuthor(`🎱 ${message.author.username}`)
         
            .setColor("GREEN")
         
            .addField("Kérdés", question)
         
            .addField("Válasz", replies[result])
    
            .setFooter(message.createdAt)
    
            message.channel.send(ballEmbed).then(async msg => {
            })
        }
}