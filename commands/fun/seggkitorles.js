const Discord = require('discord.js');
module.exports ={
    name:"seggkitörlés",
    run: async(client, message, args) =>{
        const esély = ["sikerült", "nem sikerült", "majd anya megoldja helyetted"]
            
        const farok = esély[Math.floor(Math.random()* esély.length)]

        const embed = new Discord.MessageEmbed()
        .setColor(0xff00dd)
        .setTitle("Seggkitörlés")
        .setDescription(`A segged kitörlése: ${farok}`)
        message.channel.send(embed)


    }
}