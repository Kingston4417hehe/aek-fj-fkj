const Discord = require('discord.js');
module.exports = {
    name: "szavazas",
    category: "fun",
    run: async (client, message, args) =>{
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel('Nincs ehhez jogod')
            if(args[0] ){
    
                let bé_embed = new Discord.MessageEmbed()
    
                .setAuthor(message.author.tag + `| Szavazást`)
    
                .setDescription(args.join(" "))
    
                .setColor("RED")
    
                .setTimestamp(message.createdAt)
    
               
                
    
                message.channel.send(bé_embed).then(async msg =>{
    
                    await msg.react("✅")
    
                    await msg.react("❌")
                })
            } else {
                message.reply("Kérlek add meg a szavazást!")
            }
        }
    }
