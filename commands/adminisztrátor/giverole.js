const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'rangaddás',
    aliases: ["roleadd"],
	run: async (client, message, args) => {
		message.delete();

		if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Nincs jogod hozzá').then((m) => m.delete({ timeout: 5000 }));

		if (!args[0] || !args[1]) return message.channel.send('Használat: <@név> <rang neve>').then((m) => m.delete({ timeout: 5000 }));

		try {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);

			if (alreadyHasRole) return message.channel.send('Ez a rang már szerepel a felhasználón').then((m) => m.delete({ timeout: 5000 }));

			const embed = new MessageEmbed()
				.setTitle(`Rang neve: ${roleName.name}`)
				.setDescription(`${message.author} A rang sikeresen rá lett rakva ${member.user}-re rang neve: ${roleName}`)
				.setColor('ff00dd')

			return member.roles.add(roleName).then(() => message.channel.send(embed));
		} catch (e) {
			return message.channel.send('Próbáld meg később oda adni a rangot...').then((m) => m.delete({ timeout: 5000 }));
		}
	},
};