const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports ={
    name: "meme",
    category: "fun",
    run: async (client, message, args) =>{


            
            const subreddits = ["dankmeme", "meme", "me_irl"]
            
            const random = subreddits[Math.floor(Math.random()* subreddits.length)]

            const IMG = await randomPuppy(random)
            
            const MemeEmbed = new Discord.MessageEmbed()

            .setColor("RANDOM")

            .setImage(IMG)

            .setTitle(`Keresési szöveg: ${random}`)

            .setURL(`https://www.reddit.com/r/${random}`)

            .setFooter(message.createdAt)

            message.channel.send(MemeEmbed)
        }}