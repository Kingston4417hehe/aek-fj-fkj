const Discord = require(`discord.js`);



module.exports = {
    name: "serverinfo",
    aliases: ["szerverinfo"],
    run: async (client, message, args) => {
      const { guild } = message
      const icon = message.guild.iconURL()
      const roles = message.guild.roles.cache.map(e => e.toString())
      const emojis = message.guild.emojis.cache.map(e =>  e.toString())
      const emojicount = message.guild.emojis.cache 
      const members = message.guild.members.cache
      const create = message.guild.createdAt.toLocaleDateString()
  
      const szerveriEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Server Info')
      .setThumbnail(`${icon}`)
      .addField('Szerver Tulaj:-', guild.owner)
      .addField('Szerver ID:-', guild.id)
      .addField('Sezrver létrehozása:-', create)
      .addField('Boost számláló:-', guild.premiumSubscriptionCount)
      .addField('Boost Level:-', guild.premiumTier)
      .addField('Emoji számláló:-', `${emojicount.size}\n${emojicount.filter(emoji => !emoji.animated).size}(Non Animated)\n${emojicount.filter(emoji => emoji.animated).size}(Animated)`)
      .addField('Emojik:-', `${emojis}`, true) 
      .addField('Szerver statisztikák:-', `${guild.channels.cache.filter(channel => channel.type == 'text').size}⌨️\n${guild.channels.cache.filter(channel => channel.type == 'voice').size}🔈\n${guild.channels.cache.filter(channel => channel.type == 'news').size}📢\n${guild.channels.cache.filter(channel => channel.type == 'category').size}📁`)
      .setFooter('Szerver infó', icon)


      
      message.channel.send(szerveriEmbed)
    }
}