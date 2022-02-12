const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'userinfo',
    run: async (client, message, args) => {
        const user =            message.mentions.members.first()
            || message.guild.members.cache.get(args[0])
            || message.member;

        let status;
        switch (user.presence.status) {
        case 'online':
            status = ':online: online';
            break;
        case 'dnd':
            status = ':dnd: dnd';
            break;
        case 'idle':
            status = ':idle: idle';
            break;
        case 'offline':
            status = ':offline: offline';
            break;
        default:
            status = 'Unknown';
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor('#f3f3f3')
            .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                {
                    name: 'Név: ',
                    value: user.user.username,
                    inline: true,
                },
                {
                    name: '#️⃣ Tag: ',
                    value: `#${user.user.discriminator}`,
                    inline: true,
                },
                {
                    name: '🆔 ID: ',
                    value: user.user.id,
                },
                {
                    name: 'Állapot: ',
                    value: status,
                    inline: true,
                },
                {
                    name: 'Játékban: ',
                    value: user.presence.activities[0] ? user.presence.activities[0].name : 'A felhasználó nem játszik semmivel',
                    inline: true,
                },
                {
                    name: 'Avatar link: ',
                    value: `[Kattints ide](${user.user.displayAvatarURL()})`,
                },
                {
                    name: 'Regisztrálás időpontja: ',
                    value: user.user.createdAt.toLocaleDateString('en-us'),
                    inline: true,
                },
                {
                    name: 'Csatlakozott: ',
                    value: user.joinedAt.toLocaleDateString('en-us'),
                    inline: true,
                },
                {
                    name: 'Rangjai: ',
                    value: user.roles.cache.map((role) => role.toString()).join(' ,'),
                    inline: true,
                },
            );

        return message.channel.send(embed);
    },
};