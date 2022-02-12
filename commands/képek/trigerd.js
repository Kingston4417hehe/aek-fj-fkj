const Discord = module.require("discord.js");

module.exports = {
  name: "trigger",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Lebukott? Ki?");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/triggered?avatar=${avatar}`,
          name: "file.jpg",
        },
      ],
    });
  },
};