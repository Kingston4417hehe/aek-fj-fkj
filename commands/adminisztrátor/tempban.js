const Discord = require('discord.js');
module.exports ={
    name: "ban",
    category: "adminisztrátor",
    run: async (client, message, args) =>{
       
    
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
            let rawreason = args[2];
    
            let bantime = args[1];
    
            let reason = args.slice(2).join(' ')
    
            if (!message.member.hasPermission("BAN_MEMBERS"))            return message.reply("**HIBA:** `Nincs jogod ehhez a parancshoz!` ")
    
            if(!args[0] || !args[1] || !args[2] || isNaN(bantime)) return message.reply("**HIBA:** `Helyes használat: {prefix}ban <@felhasználó> [idő{(nap) max 7} <indok>`");
    
            if (user.hasPermission("BAN_MEMBERS") || user.hasPermission("ADMINISTRATOR")) return message.reply("**HIBA:** `Magaddal egyen rangú tagot, vagy nagyobbat nem bannolhatsz ki!`");
    
            if(user.ban({days: bantime, reason: reason})) {
    
                message.reply("**Sikeresen kitiltottad a következő felhasználót:** (" + user.user.tag + ")")
    
            } else {
    
                message.reply("**HIBA:** `Nincs jogod bannolni ezt az embert.`");
            }
        }
    }
