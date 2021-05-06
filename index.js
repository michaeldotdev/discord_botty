const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  console.log(message.content)
})


client.login(process.env.TOKEN);