const Discord = require ('discord.js')
const db = require('quick.db')    
    
    const talkedRecently = new Set();    
    

        module.exports = {
            name: "work",
            category: "economy",
            aliases: ["munka","baszás"],
            run: async (client, msg, args) => {
                
                if (talkedRecently.has(msg.author.id)) {

                    let cooldownEmbed = new Discord.MessageEmbed()
                    .setDescription("Várj egy picit még  újra használnád a parancsot")
                    .setColor("#0000ff")

                    msg.channel.send(cooldownEmbed);
            } else { 
                const munkak = ["rendőrnek","mentősnek","programozónak","szakácsnak","ügyvédnek","bolti eladónak"]

                const munka = munkak[Math.floor(Math.random() * munkak.length)];

                const munkadíj = Math.floor(Math.random()* 1500 + 1000)
 
               let kurva = new Discord.MessageEmbed()

               .setTitle(`Elmentél dolgozni ${munka}`)
               .addField(`Munkádért kaptál:`, `${munkadíj}`)
               .setFooter(`Jupiter Economy Rendszer`)
               msg.channel.send(kurva);
               db.add(`Money_${msg.author}_${msg.guild}`, munkadíj)


                talkedRecently.add(msg.author.id);
                setTimeout(() => {
                  talkedRecently.delete(msg.author.id);
                }, 300000);
            }    

            }}
        