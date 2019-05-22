const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("je suis connecter" + client.user.tag)
})


client.login('NTY1MjMxMTQ5MzI5NDE2MjIy.XOU8eA.q5dH4CybqPNNNMsjoxWGsGYilZI')
