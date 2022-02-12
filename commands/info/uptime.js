const Discord = require('discord.js');

    const ms = require('ms');

module.exports = {
        name: 'uptime',
run: async (client, message, args) => {
message.reply(`${ms(client.uptime)}`)
    }
}