const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
name: 'eszköz',
aliases : ['device'], 
run: async (client, message, args) => {

    const user = message.mentions.users.last() || message.author;
    const devices = user.presence?.clientStatus || {};
    const description = () => {
        const entries = Object.entries(devices)
            .map(
                (value, index) => 
                `${
                    index + 1
                }) ${value[0][0].toUpperCase()}${value[0].slice(1)}`
            )
            .join("\n");
        return `Eszközök:\n${entries}`;
    };
    const embed = new MessageEmbed ()
        .setAuthor (user.tag, user.displayAvatarURL())
        .setDescription(description());
    message.channel.send(embed);
}
}; 