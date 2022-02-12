const { MessageEmbed } = require('discord.js');
//const fetch = require('node-fetch'); 

module.exports = {
    name: "github",
    run: async(client, message, args) => {
      const user = args.join(' ')
      if(!user) return message.channel.send('Nincs ilyen felhasználó')
      const url = `https://api.github.com/users/${user}`
      let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('HIBA!!! Később próbáld újra')
        }
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${response.login}`)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription(response.bio ? response.bio : 'Nincs Bio')
        .addField('Nyilvános megosztások:', response.public_repos.toLocaleString())
        .addField('Követők:', response.followers.toLocaleString())
        .addField('Követések:', response.following.toLocaleString()) 
        .addField('Cég:', response.company ? response.company : 'Nincs cég')
        .addField('Hely:', response.location ? response.location : 'Nincs hely megadva')
        message.channel.send(embed)
    }
}