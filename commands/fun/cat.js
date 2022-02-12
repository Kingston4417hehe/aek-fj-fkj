const Discord = require('discord.js');
const superagent = require('superagent');
module.exports ={
    name: "cat",
    category: "fun",
    run: async (client, message, args) =>{
            
            let msg = await message.channel.send("`*Cecaaa betöltése...*`")

            
            let{body} = await superagent
            
            .get(`https://aws.random.cat/meow`)

            
            if(!{body}) return message.channel.send("**A kép betöltésekor hiba lépett fel!**")

            let catEmbed = new Discord.MessageEmbed()
            
            .setColor("RANDOM")
            
            .addField("MEOW", ":3")
            
            .setImage(body.file)
            
            .setFooter(message.createdAt)

            message.channel.send(catEmbed)
        }
}