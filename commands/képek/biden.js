const Discord = require('discord.js');

module.exports = {
  name: 'biden',
  cooldown: 3,
run:  async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send('`Használat: (prefix)biden <szöveg>`')
    }
    let bidenMessage = args.slice(0).join(' ');
    if (bidenMessage.length > 65) return message.channel.send('**Nem mehetsz 65 karakter felé!**');

    message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/biden?text=${bidenMessage}`, name: 'reaperbiden.jpg' }] });
  }
}