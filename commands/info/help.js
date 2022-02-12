const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports ={
  name: "help",
  run: async(client, message, args) =>{

    const botinfo = new Discord.MessageEmbed()
    .setColor(0Xff00dd)
    .setTitle(`Jupiter infók ${message.author.username}`)
    .addField(`**Prefix**`, `Jupiter prefixe: ?`)
    .addField(`**Lapok**`, '`1. Jupiter infók`, `2. Adminisztrátor`,\n `3. nsfw`, `4. fun`,\n `5. economy`, `6. ticket`,\n `7. welcome`, `8. info`,\n `9. muzsika``10. saját neves parancsaink`,\n `11. Képmanipulációs parancsok`')
    .addField(`**Navigáció segítség**`, `A nyilak segítségével tudsz haladni a lapok között`)
    .addField(`Külön rendszerek`,`welcome és a badwords`)
   .addField(`antiscam`, `A scam linkeket törli`)
    .addField(`badwords`, `Bizonyos szavak melyek például a fasz meg ehhez hasonlatos szavakat szűri és csak azoknak engedi leírni\n akiknek van adminisztrátor joga`)

    const Information = new Discord.MessageEmbed()
    .setColor(0Xff00dd)
    .setTitle(`Adminisztrátor ${message.author.username}`)
    .addField(`?ban`,`Kibanolja az általad kiválasztott embert`)
    .addField(`?bejelentés`,`Egy bejelentést tehetsz vele közzé`)
    .addField(`?clear`, `1-100 terjedő skálán törölhetsz üzenetet`)
    .addField(`?createrole`, `Egy rangot tudsz csinálni teljesen random színnel és 0 tulajdonsággal`)
    .addField(`?embedsay`, `A szövegedet embedbe rakja`)
    .addField(`?giverole`, `Egy rangot tudsz ráadni egy külön emberre`)
    .addField(`?kick`,`Ki tudsz rúgni egy adott embert`)
    .addField(`?lock`, `Le tudod zárni az adott csatornát`)
    .addField(`?mute`, `Le tudsz némítani egy adott embet`)
    .addField(`?slow`, `Lassítást tudsz rakni a szöveges csatornára`)
    .addField(`?tempban`, `Maximum 7 napra való banolás`)
    .addField(`?unban`, `Unbanolni tudod az adott embert(Az ember discord ID-ja fontos hozzá)`)
    .addField(`?unlock`, `Vissza tudod vonni a csatorna zárolást`)
    .addField(`?unmute`, `Vissza tudod vonni a némítást az adott személyről`)
    .addField(`?warn`, `Figyelmesztetni lehet egy adott embert`)
    .addField(`?setlog`, `Logoló csatorna beállítása`)
    .addField(`?setnick`, `Egy ember becenevét változtathatod meg`)
    .addField(`?badwords on/off`, `Badwords rendszer ki és bekapcsolása`)
    .addField(`?antispam on/off`, `Antispam rendszer ki és bekapcsolása`)
    .addField(`?setnick`, `Egy adott embernek tudod a becenevét változtatni`)
    .addField(`?antilink on/off`, `Antilink rendszer ki és bekapcsolása`)

    const nsfw = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`NSFW parancsok ${message.author.username}`)
    .setDescription(`?4k, ?anal, ?ass, ?porn, ?hentai, ?pussy, ?slut`,`Ezek küldenel lépi anyagot`)
    .addField(`?méret`, `Megmondja mekkora a f@szod`)

    const fun = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Funparancsok ${message.author.username}`)
    .addField(`?8ball`, `A kérdésedre válaszol`)
    .addField(`?amőba`, `Egy másik emberrel tudsz amőbázni`)
    .addField(`?calc`, `Kiszámolja az általad beírt műveletet`)
    .addField(`?cat`, `Küld egy képet egy cicáról`)
    .addField(`?coinflip`, `Fej vagy írás command`)
    .addField(`?github`, `Github accountokra tudsz rákeresni`)
    .addField(`?howgay`, `Megmutatja mennyire vagy meleg`)
    .addField(`?időjárás`, `Meg tudod nézni az általad választott településen az időjárási viszonyokat`)
    .addField(`?iq`, `Megmutatja hogy mekkora az iq szinted`)
    .addField(`?jail`, `A profilképedet börtönössé teszi`)
    .addField(`?meme`, `Küld egy memet`)
    .addField(`?simp`, `Megmutatja hány százalékban vagy simp`)
    .addField(`?youtube`, `Rá tudsz keresni youtube csatornákra`)
    .addField(`?google`, `Keresni tudsz a googleon discord segítségével`)
    .addField(`?fnitro`, `Fake nitro generálás 1db`)
    .addField(`?seggkitörlés`, `Felhoz három lehetőséget a segged kitörlésének témájából`)
    .addField(`?ship`, `Megmutatja, hogy két ember mennyire szerelmes egymásba, és a leendő gyerekük nevét`)
    
   
    const economy = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Economy parancsok ${message.author.username}`)
    .addField(`?bal`, `Egyenleged lekérése`)
    .addField(`?daily`, `Napi pénzösszeg megszerzése`)
    .addField(`?lb`, `Top10 leggazdagabb ember a szerveren`)
    .addField(`?monthly`, `Havi pénzösszeged megszerzése`)
    .addField(`?pay`, `Utalni tudsz egy másik embernek`)
    .addField(`?rob`, `Ki tudsz rabolni embereket (akiknek van több mint 250Ft-juk)`)
    .addField(`?slot`, `Szerencsejáték parancs`)
    .addField(`?weakly`, `Heti pénzösszeged megszerzése`)
    .addField(`?work`, `Gyakori pénzösszeged megszerzése`)

    const ticket = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Ticket parancsok ${message.author.username}`)
    .addField(`?ticket`, `Létrehoz egy ticketed egy reakcióval(Hátránya mindig újra kell rakni ha offline lesz a bot)`)

    const welcome = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Welcome parancsok ${message.author.username}`)
    .addField(`?setwelcome`, `Beállíthatod az üdvözlő csatornát`)
    .addField(`?setbye`, `Beállíthatod a távozó csatornát`)
  
    const info = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Info parancsok ${message.author.username}`)
    .addField(`?szavazás`, `Egy szavazást tudsz indítani`)
    .addField(`?botinfo`, `Kimutatja a bot infóit`)
    .addField(`?bugreport`, `A botban való hibákat tudod reportolni`)
    .addField(`?links`, `A bot fontosabb linkjeit adja ki`)
    .addField(`?ping`, `Kimutattja a saját pinged és a bot pingjét`)
    .addField(`?szerverinfo`, `Kimutatja a szerver infóit`)
    .addField(`?userinfo`, `Kimutatja a felhasználó infóit`)
    .addField(`?device`,`Megmutatja milyen eszközön használod a discordot`)

    const muzik = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Zene parancsok ${message.author.username}`)
    .addField(`?play`, `A bot bejoinol és lejátsza a zenédet`)
    .addField(`?queue`, `Várólista lekérése`)



    const our = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Saját neves parancsaink ${message.author.username}`)
    .addField(`?dénes`,`Egy Szöveg kidobása`)
    .addField(`?bende`,`Egy Szöveg kidobása`)
    .addField(`?bence`,`Egy Szöveg kidobása`)

    const kepek = new Discord.MessageEmbed()
    .setColor(0xff00dd)
    .setTitle(`Képmanipulációs parancsok ${message.author.username}`)
    .addField(`?biden`, `Biden tweeteli a szövegedet`)
    .addField(`?drake`, `Saját drake meme`)
    .addField(`?jail`, `Börtönbe rakja az általad kiválasztott ember profilképét`)
    .addField(`?triger`, `Trigger vászont rak az általad kiválasztott ember profilképére`)
    .addField(`?wasted`, `Wasted vászont rak az általad kiválasztott ember profilképére`)
    .addField(`?wideavatar`, `A profilképedet kinyújtja`)


    const lapok = [
        botinfo,
        Information,
        nsfw,
        fun,
        economy,
        ticket,
        welcome,
        info,
        muzik,
        our,
        kepek
    ]
    

    const emojiList = ["⏪", "⏩"]

    const timeout = '700000';

    pagination(message, lapok, emojiList, timeout)
  }
}