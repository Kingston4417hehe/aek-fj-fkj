const Discord = require('discord.js');
module.exports = {
    name: "bejelentés",
    run: async(client, message, args) =>{
       
            if(message.member.hasPermission("ADMINISTRATOR"))
           var szoveg = args.join(" ")
           message.delete();
           var embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("🚨 Bejelentés érkezett🚨")
            .setDescription(szoveg)
            .setAuthor(message.author.username)
            message.channel.send(embed)
            }
    }
