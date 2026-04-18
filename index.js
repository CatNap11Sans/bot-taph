const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('ready', () => {
  console.log(`Logado como ${client.user.tag}`);
});

client.on('messageCreate', (msg) => {
  if (msg.content === '!teste') {
    msg.reply('Funcionando!');
  }
});

client.login(process.env.TOKEN);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot está online!');
});

app.listen(3000, () => {
  console.log('Servidor web ativo na porta 3000');
});
