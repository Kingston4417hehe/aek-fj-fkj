const Discord = module.require("discord.js");

module.exports = {
   name: "lock",

   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Nincs jogod")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   await message.channel.send("sikeresen le zárva");
   message.delete();
}
}