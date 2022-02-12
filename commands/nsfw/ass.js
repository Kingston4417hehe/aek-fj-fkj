const Discord = require("discord.js");
module.exports = {
    name: "ass",
    category: "NSFW",
  description: "Sends ass",
  run: async (client, message, args, level) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('Ez nem egy NSFW csatorna') 

    var lo = new Discord.MessageEmbed()
                .setDescription(`Please wait`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage:\n**[...](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
            
            
            m.edit(embed_nsfw);
        });
    });
}
}