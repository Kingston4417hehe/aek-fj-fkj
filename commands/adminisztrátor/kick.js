const Discord = require('discord.js');
module.exports = {
    name: "kick",
    aliases: ["kirúgás", "kickelek"],
    run: async(client, message, args) =>{
        if(!message.member.hasPermisson("KICK_MEMBERS")) return message.reply("Nincs jogod embereket kirúgni")
        var kicketkaptalhehe = message.mentions.member.first()
        if(kicketkaptalhehe.hasPermisson("KICK_MEMBERS")) return message.channel.send("Nincs jogod kirúgni őt")
        let indok = args.slice(1).join(" ")|| "Nincs indok megadva"
        if(args[0]){
            let kickEmbed = new Discord.MessageEmbed()
            .setTitle("Sikeres interakció")
            .addField(`Kickelve lett`, `${kicketkaptalhehe}`)
            .addField(`Indoklás:`, `${indok}`)
            .setColor("#ff00dd")
            message.channel.send(kickEmbed)

            kicketkaptalhehe.kick(args.slice(1).join(" "))
        } else {
           var hibaEmbed = new Discord.MessageEmbed()
           .setTitle("**Hiba**")
           .setDescription(`Elhagyható: () Kötelező: <>`)
           .setDescription(`Helyes használat: ${prefix}kick <@ember> (indok)`)
           .addField(`Hiba:`, `Nem említettél meg senkit`)
           .setColor("#ff00dd")
           message.channel.send(hibaEmbed)
        }
    }}