 const Discord =  require('discord.js');

 module.exports ={
     name: "howgay",
     run: async(client, message, args) =>{
         var member = message.mentions.users.first() || message.author

         var rng = Math.floor(Math.random() * 100 +1);


         const howgayEmbed = new Discord.MessageEmbed()
         .setTitle(`Mennyire vagy meleg? `)
         .setDescription(`${member.username}` +rng + "%Meleg")
         .setColor(`RANDOM`)

         message.channel.send(howgayEmbed);
     }
 }