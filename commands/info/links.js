const Discord = require('discord.js');
module.exports ={
    name: "links",
    category: "fun",
    run: async (client, message, args) =>{

            let iepEmbed = new Discord.MessageEmbed()
    
            .setAuthor(message.author.username)
            .setTitle("**A Jupiter Discord Bot Fontosabb Linkjei: **")
            .addField(`Support szerver:`,`https://discord.gg/8vYQ9Ktj3z`)
            .addField("Jupiter bot invite link", "https://discord.com/api/oauth2/authorize?client_id=919991037198487584&permissions=8&scope=bot")
            .addField(`TikTok:`, `https://tiktok.com/@jupiterbot`) 
            .addField(`weblap:`,`https://jupitersupport.000webhostapp.com/home.html\n egyenlőre még itt de majd meg lesz a rendes is`)   
            .setColor("ORANGE")
            .setFooter(message.createdAt)
    
            message.channel.send(iepEmbed)
    }}
