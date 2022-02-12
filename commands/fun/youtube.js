const axios = require('axios');
const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'youtube',
	run: async (client, message, args) => {
		if (!args[0]) {
			return message.channel.send('Kérlek adj meg egy youtube csatorna nevet');
		}

		const url = `https://www.youtube.com/results?search_query=${args.join(" ")}`

		let info;

		try {
			const { data } = await axios.get(url);
			[info] = data;
		} catch (e) {
			return message.channel.send('Nincs ilyen csatorna');
		}

		const embed = new MessageEmbed()
			.setTitle(info.brandingSettings.channel.title)
			.setThumbnail(info.snippet.thumbnails.default.url)
			.setColor(info.brandingSettings.channel.profileColor)
			.addFields(
				{
					name: 'Feliratkozó szám: ',
					value: info.statistics.hiddenSubsciberCount ? 'Feliratkozó szám el van rejtve!' : info.statistics.subscriberCount,
				},
				{
					name: 'Összes videó: ',
					value: info.statistics.videoCount,
					inline: true,
				},
				{
					name: 'Csatorna leírás: ',
					value: info.snippet.description,
				})
		message.channel.send(embed)
	}
};