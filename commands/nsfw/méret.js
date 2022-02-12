const Discord = require('discord.js');
module.exports = {
    name: "méret",
    run: async (client, message, args) => {

       

        var errMessage = "Ez nem NFSW csatorna!!!";
        if (!message.channel.nsfw) {
            message.react('💢');
      
            return message.reply(errMessage)
            .then(msg => {
            msg.delete({ timeout: 3000 })
            })       
        } else {

         var member = message.mentions.users.first() || message.author

         var rng = Math.floor(Math.random() * 30+1);


         const howgayEmbed = new Discord.MessageEmbed()
         .setTitle(`Mekkora a faszod mérete? `)
         .setDescription(`${member.username}` +rng + "cm neki")
         .setColor(`RANDOM`)

         message.channel.send(howgayEmbed);
     }
 }
        }

