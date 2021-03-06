
const Discord = module.require("discord.js");

module.exports = {
  name: "google",
  description: "Search anything on google",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const text1 = args.join(" ");
    const text2 = args.join("+");
    const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
    if (!text2) {
      return message.channel.send("Kérlek keress rá valamire");
    }
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Google",
        `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
      )
      .setThumbnail(
        `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
      )
      .setDescription(
        `**Erre kerestél rá: **\n${text1} \n\n**Eredmény: **\n[Itt van amit találtam](https://google.com/search?q=${text2})`
      )
      .setThumbnail(google)
      .setColor("RANDOM");
    message.channel.send(embed)
  },
};