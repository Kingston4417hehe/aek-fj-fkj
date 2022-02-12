const Discord = require('discord.js');
module.exports = {
    name: "createrole",
    category: "adminisztrátor",
    run: async (client, message, args) =>{
        var prefix = "?"

            if(message.guild.me.hasPermission("ADMINISTRATOR")){
                if(message.member.hasPermission("MANAGE_ROLES")){
                 if(args[0]){
                     message.guild.roles.create({
                         data: {
                             "name": args[0],
                             "permissions":"CHANGE_NICKNAME",
                             "permissions": "SEND_TTS_MESSAGES",
                             "color": "RANDOM"
                         }
                     }).then(message.reply(`${message.author.tag} létrehozta: ${args[0]} nevű rangot!`))
 
 
                 } else message.reply(`Használat: ${prefix}createrole <rang neve>`)
                } else message.reply("Ehhez a parancshoz nincs jogod! A következő jog kell hozzá: manage_roles")
 
            } else message.reply("A botnak nincsen adminisztrátor joga! Kérlek adj neki egy admint!")
 
            
        }     
    }
