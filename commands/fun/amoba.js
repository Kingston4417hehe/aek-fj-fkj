const { tictactoe } = require('reconlx') 
const Discord = require('discord.js');  
module.exports ={
    name: "amőba", 
    aliases: ["ttt", "amoba"], 
    run: async(client, message, args) =>{
        const member = message.mentions.members.first()
        if(!member) return message,channel.send('Kérlek adj meg egy embert hogy játszhasd a játékot!')
        
        new tictactoe({
            player_two: member,
            message: message
        })
    }
}