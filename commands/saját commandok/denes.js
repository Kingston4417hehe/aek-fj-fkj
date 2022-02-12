const Discord = require('discord.js');

module.exports ={
    name: "dénes",
    run: async(client, message, args) =>{
        const embed = new Discord.MessageEmbed()
        .setDescription(`Boldizsár egy jó ember`)

        message.channel.send(embed)
    }
}