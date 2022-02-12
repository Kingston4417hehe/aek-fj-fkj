const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
        name: 'coinflip',
        aliases: ["érmefeldobás"],
   
    run: async (client, message, args) => {
    const responses = ['Fej', 'Írás'];
		const response =
		responses[Math.floor(Math.random() * responses.length)];
		message.channel.send(' Pörgés...').then((msg) => {
			const Embed = new MessageEmbed()
				.setTitle('A te dobásod.  .  .')
				.setColor('0xff00dd')
				.setDescription(
					`${response}!`,
				);
			msg.edit(Embed);
		});
    }
}