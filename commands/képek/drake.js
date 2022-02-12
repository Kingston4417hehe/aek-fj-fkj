const Discord = require("discord.js");

module.exports = {
    name: "drake",
    cooldown: 3,
    run: async(client, message, args) => {
        const splitArgs = args.join(" ").split("/")
        const text1 = splitArgs[0]
        if (!text1) return message.channel.send("Adj megfelelő szöveget a két szöveg elválasztását a `/`-rel tudod megoldani")
        const text2 = splitArgs[1]
        if (!text2) return message.channel.send("Adj megfelelő szöveget a két szöveg elválasztását a `/`-rel tudod megoldani")
        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text1}&text2=${text2}`, name: "reaperdrake.png" }] });
    }
}