const Discord = module.require("discord.js");

module.exports = {
  name: "jail",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Ki van a börtönben Iron mellett?");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/jail/?avatar=${avatar}`,
          name: "file.jpg",
        },
      ],
    });
  },
};