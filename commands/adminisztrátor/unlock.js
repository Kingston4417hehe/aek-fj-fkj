const Discord = module.require("discord.js");

module.exports = {
   name: "unlock",

   
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("Nincs jogod")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   await message.channel.send("sikeresen feloldava ");
   message.delete();
}
}