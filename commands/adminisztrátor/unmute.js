const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute',
    description: "Leszedi a némítást a megjelölt emberről!",
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Akit megjelöltél nem taláható!')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} mostmár nincs lenémítva!`)
    }
}