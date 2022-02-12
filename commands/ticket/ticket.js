const Jsonfile = require('../config/config.json');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports ={
    name: "ticket",
run: async (client, message, args) => {
if (message.author.id !== Jsonfile.owner) return message.channel.send("Nincsen jogod használni ezt a commandot!").then((msg) => {
    setTimeout(() => msg.delete(), 7000);
})
    const signup = await message.channel.send({embed: {
        color: Jsonfile.signup_color,
        fields: [{
            name: Jsonfile.signup_title,
            value: "Reagálj ezzel: 📩, hogy megnyisd a ticketedet!"
          }
        ],
       
        }
      
    });
    await signup.react("📩")
    const collector = signup.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
        { dispose: true }
        );
    collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
            case "📩":
                contining(user)
            break;
        }
    })
    async function contining(user){
        const channel = await message.guild.channels.create(`ticket: ${user.username + "-" + user.discriminator}`);

        channel.updateOverwrite(message.guild.id, {
        "SEND_MESSAGE": false,
        "VIEW_CHANNEL": false,
        });
        channel.updateOverwrite(user.id, {
        "SEND_MESSAGE": true,
        "VIEW_CHANNEL": true,
        });

        const reactionMessage = await channel.send({embed: {
            color: Jsonfile.answer_color,
            fields: [{
                name: Jsonfile.answer_title,
                value: `Szia ${message.author}, Üdvözöllek a Jupiter ticket rendszerében! A supportok hamarosan felveszik veled a kapcsolatot! Kérlek várj türelmesen addig is írd le a gondod!`
              }
            ]
        }
        })
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");

        const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
        );
        

        collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
            case "🔒":
            channel.updateOverwrite(user.id, { "SEND_MESSAGES": false });
            channel.send("A ticket le van zárolva!");
            break;
            case "⛔":
            if (message.guild.channels.cache.find(c => c.name.toLowerCase() === channel.name)) {    
            setTimeout(() => channel.delete(), 5000);
                channel.send("A ticketed törlődik 5 másodperc múlva!");
                return;
            }
            break;
        }
        });
    }
  }}