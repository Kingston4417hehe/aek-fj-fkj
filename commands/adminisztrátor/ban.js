const Discord = require('discord.js');
module.exports ={
    name:"ban",
    run: async(client, message, args) => {
        let ember = message.mentions.members.first()
        let indok = args.slice(1).join(" ") || "Adj meg egy indokot!"
        let permission = "BAN_MEMBERS"
        if (!message.member.hasPermission("BAN_MEMBERS")) {
          let embed = new MessageEmbed()
          .setColor("#080707")
          .setDescription(`Neked ehhez nincs jogod!\n Szükséges jog: **${permission}**  :man_detective: `)
          return message.channel.send(embed)
        }
        if(!args[0]) return message.channel.send("$ban <felhasználó> <indok>")
        if(!ember) return message.channel.send("$Kérlek írj be egy felhasználót!")
        if(ember.id === message.author.id) return message.channel.send("Nem tudod saját magadat kitiltani!")
        if(ember) {
            if(ember.bannable) {
                ember.ban({reason: indok}).then(() => {
                message.channel.send(`**${ember.user.tag}** ki lett tiltva. \nIndok: **${indok}**`)
            })
        }}}}