const Discord = require('discord.js');
module.exports = {
    name: "embedsay",
    category: "adminisztrátor",
    run: async (client, message, args) =>{
        var prefix = "?"
            if(message.member.hasPermission("KICK_MEMBERS")){
    
                if(args[0]){
    
                    let say_embed = new Discord.MessageEmbed()
    
                    .setDescription(args.join(" "))
    
                    .setColor("RANDOM")
    
                    .setTimestamp(message.createdAt)
    
    
                    message.channel.send(say_embed);
                } else {
    
                    message.reply(`Használat: ${prefix}embedsay <üzenet>`)
                } 
    
            } else message.reply("Ehhez nincs jogod! (`KICK_MEMBER jogot igényel`)")
        }
    }