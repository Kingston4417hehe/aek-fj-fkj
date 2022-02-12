const Discord = require('discord.js');

module.exports ={
    name:"bende",
    run: async(client, message, args) =>{

        const embed = new Discord.MessageEmbed()
        .setColor("#ff00dd")
        .setDescription(`Megint azt mondják hogy nem rap\n
                         Mi a faszom ez techno?\n
                         Úgy baszatom, mint a Ken Block\n
                         Dik Fast and Furious tempó,\n
                         Mint Viktor, Mint Viktor\n
                         Street Fighter kimbooo\n
                         Knight Rider a Kittet a kanyarban tiltom! WUTTUTTUTTU!!!`)

            message.channel.send(embed)
    }
}