const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("je suis connecter" + client.user.tag)
})

client . on ('message', msg => { 
  if (msg . content === 'ping') { 
    msg . reply ('Pong!') 
      
client.login('NTY1MjMxMTQ5MzI5NDE2MjIy.XOU8eA.q5dH4CybqPNNNMsjoxWGsGYilZI')
