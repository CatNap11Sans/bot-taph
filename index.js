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
