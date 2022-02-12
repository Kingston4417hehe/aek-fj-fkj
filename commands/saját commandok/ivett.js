const Discord = require('discord.js');

module.exports = {
    name: "ivett",
    run: async(client, message, args) =>{
            const embed = new Discord.MessageEmbed()
            .setDescription('Ivett egy űrlény\n És szereti szopatni Boldizsárt')
            .setColor("#ff00dd")
            message.channel.send(embed)
    }
}