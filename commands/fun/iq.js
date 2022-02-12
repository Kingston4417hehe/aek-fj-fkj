const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')


module.exports = {
        name: 'iq',
    
    run: async (client, message, args) => {
    
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
         try {

    const iq = Math.floor(Math.random() * 226);
    const embed = new MessageEmbed()

    .setTitle(":brain: IQ Teszt:")
    .setDescription(`:bulb:   ${user}'s  **IQ szinted:**   \`${iq}\`  `)
    .setColor("#ff00dd")
    message.channel.send(embed);

        } catch (err) {
    message.channel.send({embed: {
      description: `${client.emotes.error} Valami félre csúszott...`
    }})
  }
    }
}