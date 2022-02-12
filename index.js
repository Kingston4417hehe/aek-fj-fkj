const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const randomPuppy = require('random-puppy');
const superagent = require('superagent');
const { checkout } = require("superagent");
const { channel } = require("diagnostics_channel");
const ms = require("ms");
var weather = require(`weather-js`);
const discord = require('discord.js'); 
const client = new discord.Client(); 
const db = require("quick.db");
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const os = require('os');
const { version, MessageEmbed } = require('discord.js');
const  { Player } = require("discord-player");
const { clearTimeout } = require("timers");
const { URLSearchParams } = require("whatwg-url");

const player = new Player(bot);
bot.player = player;

bot.player.on("trackStart", (message, track) => message.channel.send(`Most megy: ${track.title}`))
bot.player.on("trackAdd", (message, track, queue) => message.channel.send(`${message.content.split(" ").slice(1).join(" ")} hozzá lett adva a várólistához`))
///////////////////////////////////////
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot)
});

bot.on("message", async message => {
    let prefix = botconfig.prefix;


    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = bot.commands.get(cmd);
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));

    if(command)
    command.run(client, message, args);
});
let botname = "Jupiter"
bot.on("ready" , async() => {
    console.log(`${bot.user.username} elindult!`)
    let státuszok = [
        "antispam rendszer -> ✅",
        "antilink rendszer -> ✅",
       // "welcome rendszer -> ✅",
        "economy rendszer -> ✅",
        "badwords rendszer -> ✅",
        "verzió -> 2.11.0",
        "fejlesztől -> Kingston4417, venya",
        "Súgó: prefix -> ?",
        `szerveren -> ${bot.guilds.cache.size}`,
    ]
    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]
        bot.user.setActivity(status, {type: "WATCHING"})
    }, 9000)
})
bot.on("message", async message => {
    var MessageArray = message.content.split(" "); 
    var cmd = MessageArray[0]; 
    var args = MessageArray.slice(1);  
    var prefix = botconfig.prefix;

   /* if(cmd === `${prefix}setwelcome`){

        let welcome = message.mentions.channels.first()

        db.set(`welcomechanneldb_${message.guild.id}`, welcome.id)

        message.channel.send(`Sikeresen beállítottad a ${welcome} szobát üdvözlő csatornának`)

        if(!welcome) {
            return message.channel.send("Jelöld meg az üdvözlő csatornát")
          }
    }


    if(cmd === `${prefix}setbye`){

        let bye = message.mentions.channels.first()

        db.set(`byechanneldb_${message.guild.id}`, bye.id)

        message.channel.send(`Sikeresen beállítottad a ${bye} szobát kilépő csatornának`)

        if(!bye) {
            return message.channel.send("Jelöld meg a kilépő csatornát")
        }
    }
*/
    if(cmd ==`${prefix}setlog`){
        if(args[0] === "on"){

            let ch = message.mentions.channels.first()

            if(!ch){
                message.channel.send("Adj meg egy csatornát ahova logolhatok")
            }

            db.set(`logch_${message.guild.id}`, ch.id)
            message.channel.send(`Sikeresen beállítottad log csatornának a(z) ${ch} csatornát!`)
        }
        if(args[0] === "off"){

            db.delete(`logch_${message.guild.id}`)
            message.channel.send("Sikeresen kikapcsoltad a log rendszert!")

        }

        if(!args[0]){

            message.channel.send(`Kérlek add meg hogy mit akarsz csinálni! \n> Bekapcs: ${prefix}setlog on #csatorna \n> Kikapcs: ${prefix}setlog off`)
        }
    }

    

    if(cmd === `${prefix}ping`){
        var yourping = new Date().getTime() - message.createdTimestamp
        var botping = Math.round(bot.ws.ping)
        
        message.channel.send(`A te pinged -🏓 : ${yourping} \nA bot pingje -🏓 : ${botping}`)
}

    if(cmd === `${prefix}botinfo`){
        const emoji1 = bot.emojis.cache.find(emoji => emoji.name === "djs");
        const emoji2 = bot.emojis.cache.find(emoji => emoji.name === "node");
        const embed = new MessageEmbed()
        .setTitle('Bot Statisztkák')
        .setColor('RANDOM')
        .addFields(
            {
                name: '🏘️ Szerverek',
                value: `Összesen ${bot.guilds.cache.size} szerveren.`,
                inline: true
            },
            {
                name: '🤖 Csatornák',
                value: `Összesen ${bot.channels.cache.size} ennyi csatorna.`,
                inline: true
            },
            {
                name: '🙆‍♂️ Felhasználók',
                value: `Összesen ${bot.users.cache.size} ennyi felhasználó.`,
                inline: true
            },
            {
                name: `${emoji1} Discord.js verzió`,
                value: `${version}`,
                inline: true
            },
            {
                name: `${emoji2} Node.js verzió`,
                value: `${process.version}`,
                inline: true
            },
            {
                name: '🖥️ ARCH',
                value: `\`${os.arch()}\``,
                inline: true
            },
            {
                name: '🖥️ Platform',
                value: `\`${os.platform()}\``,
                inline: true
            },
            {
                name: '🖥️ Memória',
                value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`,
                inline: true
            },
            {
                name: '🖥️ CPU',
                value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,
                inline: true
            },
        )   
    await message.channel.send(embed)
}



const { badwords } = require('./badwords.json');
if(db.has(`badwords-${message.guild.id}`)=== false) return;
if(!message.member.hasPermission("ADMINISTRATOR")){
    let confirm = false;


    let i;

    for(i = 0; i < badwords.length; i++){

        if(message.content.toLowerCase().includes(badwords[i].toLowerCase())){

            confirm = true
            }
        }

        if(confirm) {

            message.delete()

            return message.channel.send("**Ezen a szerveren ilyen szavak használata NEM engedélyezett!**")
        }
    }

});

    
/*bot.on('guildMemberAdd', member => {

    let welcomechannel = db.get(`welcomechanneldb_${member.guild.id}`)

    if(welcomechannel === null) { 
        return;
    }
const wembed = new Discord.MessageEmbed()
.setTitle(` Üdvözöllek a szerveren: ${member.user.username} `)
.setDescription(`Érezd jól magadat a szerveren`)



    bot.channels.cache.get(welcomechannel).send(wembed)

});


bot.on('guildMemberRemove', member => {

    let byechannel = db.get(`byechanneldb_${member.guild.id}`)

    if(byechannel === null) { 
        return;
    }
    const lembed = new Discord.MessageEmbed()
    .setTitle(` Elhagyta a szervert: ${member.user.username} `)
    .setDescription(`Reméljük valamikor visszatérsz egyszer köreinkbe`)

    bot.channels.cache.get(byechannel).send(lembed)

});*/
    bot.on("channelDelete", channel => {
        let ch = db.get(`logch_${channel.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Töröltek egy csatornát a neve ${channel.name}`)
    })
    
    bot.on("emojiCreate", emoji => {
        let ch = db.get(`logch_${emoji.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Létrehoztak egy emojit: ${emoji} a neve :${emoji.name}:`)
    })
    
    bot.on("emojiDelete", emoji => {
        let ch = db.get(`logch_${emoji.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Töröltek egy emojit a neve :${emoji.name}:`)
    })
    bot.on("guildMemberAdd", member => {
        let ch = db.get(`logch_${member.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Csatlakozott egy ember a neve ${member.user.tag}`)
    })
    
    bot.on("guildMemberRemove", member => {
        let ch = db.get(`logch_${member.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Kilépett egy ember a neve ${member.user.tag}`)
    })
    
    bot.on("inviteCreate", invite => {
        let ch = db.get(`logch_${invite.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Létrehoztak egy új meghívót: ${invite}`)
    })
    
    bot.on("inviteDelete", invite => {
        let ch = db.get(`logch_${invite.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Töröltek egy meghívót : ${invite}`)
    })
    
    bot.on("messageDelete", message => {
        let ch = db.get(`logch_${message.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Töröltek egy üzenetet az üzenet: ${message}`)
    })
    
    
    bot.on("roleCreate", role => {
        let ch = db.get(`logch_${role.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Létrehoztak egy rangot a rang neve: ${role}`)
    })
    bot.on("roleDelete", role => {
        let ch = db.get(`logch_${role.guild.id}`)
        if(ch === null){
            return;
        }
    
        bot.channels.cache.get(ch).send(`Töröltek egy rangot a rang neve: ${role.name}`)
    })
   ////////////////////////////////////////ZENE///////////////////////////////////////
    bot.on("message", async (message) => {
        let prefix = "?"
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        if(command === "play"){
            if(!message.member.voice.channel) return message.reply("A parancs használatához bent kell lenned egy hang csatornában!")
            if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply("*Te nem vagy velem egy voice csatornában!*")
            if(!args[0]) return message.reply("Kérlek adj meg egy URL t vagy egy címet")
    
            bot.player.play(message, args.join(" "), {firstResult: true});
        }
        if(command === "queue"){
            if(!message.member.voice.channel) return message.reply("A parancs használatához bent kell lenned egy hang csatornában!")
            if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply("*Te nem vagy velem egy voice csatornában!*")
            

            const queue = bot.player.getQueue(message);

            if(!bot.player.getQueue(message)) return message.reply(`${message.author} A várólistán még nincsen semmi`)

            message.channel.send(`**Várólista - ${message.guild.name}\nJelenleg ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) =>{
                return `**#${i + 1}** - ${track.title} | ${track.author} (A zenét kérte: ${track.requestedBy.username})`
            }).slice(0, 5).join(`\n`) + `\n\n${queue.tracks.length < 5 ? `és még **${queue.tracks.length - 5}db zene...`: `A lejátszási listában: **${queue.tracks.length}db zene van`}`
            ));
       
       
        }
        if(command === "skip"){
            if(!message.member.voice.channel) return message.reply("A parancs használatához bent kell lenned egy hang csatornában!")
            if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply("*Te nem vagy velem egy voice csatornában!*")
            let queue = await client.distube.getQueue(message)

            if(queue) {
                client.distube.skip(message)
                message.channel.send('Kész!')
            } else if (!queue){
                message.channel.send('Nincs semmi a várólistán')
            }
        }
    
    })

    const usersMap = new Map();
    const LIMIT = 5;
    const TIME = 7000;
    const DIFF = 3000;

    client.on('message', async(message) =>{
        if(message.author.bot) return;
        if(db.has(`antispam-${message.guild.id}`)=== false) return;
        if(usersMap.has(message.author.id)) {
            const userData = usersMap.get(message.author.id);
            const { lastMessage, timer } = userData;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = userData.msgCount;
            console.log(difference);

            if(difference > DIFF) {
                clearTimeout(timer)
                console.log('Timeout törölve');
                userData.msgCount = 1;
                userData.lastMessage = message;
                userData.timer = setTimeout(() =>{
                    usersMap.delete(message.author.id)
                    console.log(`Mapból kitörölve`)
                }, TIME);
                usersMap.set(message.author.id, userData)
            } else {
                ++msgCount;
                if(parseInt(msgCount) === LIMIT) {
                    let muterole = message.guild.roles.cache.find(role => role.name === `muted`);
                    if(!muterole) {
                        try {
                            muterole = await message.guild.roles.find({
                                name :"muted",
                                Permissions: []
                            })
                            message.guild.channels.cache.forEach(async (channel, id) =>{
                                await channel.createOverwrite(muterole, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS: false
                                })
                            })
                        }catch (e) {
                            console.log(e)
                        }
                    }
                    message.member.roles.add(muterole);
                    message.channel.send(`Le vagy némítva!`);
                    setTimeout(() =>{
                        message.member.roles.remove(muterole);
                        message.channel.send(`Unmuteolva lettél`)
                    }, TIME);
                } else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        } else {
            let fn = setTimeout(() =>{
                usersMap.delete(message.author.id);
                console.log(`Kitörölve a mapból`)
            }, TIME);
            usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage: message,
                timer: fn
            })
        }

        if(message.content.includes("https://" || "http://")) 
    if(db.has(`antilink-${message.guild.id}`)=== false) return; {
message.delete();
const embed = new Discord.MessageEmbed()
.setTitle('Link észlelve!')
.setDescription(`${message.author.tag} ne használj linkeket!`)
message.channel.send(embed)
}

    })

    
    
bot.login(tokenfile.token);