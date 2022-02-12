const Discord = require('discord.js');

module.exports = {
    name: "bence",
    run: async(client, message, args) =>{
        const embed = new Discord.MessageEmbed()
        .setDescription(`Bence Orbán Viktor simp`)
        message.channel.send(embed)
    }
}