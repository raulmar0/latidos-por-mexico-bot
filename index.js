require('dotenv').config()
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Environment variables
const country_code = process.env.COUNTRY_CODE;
const number = process.env.NUMBER;
const msg = process.env.MSG;

const client = new Client({
  authStrategy: new LocalAuth()
});

client.initialize();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log("Client is ready!");

  setTimeout(() => {
    let chatId = `${country_code}${number}@c.us`;
      client.sendMessage(chatId, msg).then((response) => {
          if (response.id.fromMe) {
              console.log("Client is ready!");
          }
      })
  }, 5000);
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
  message.reply()
});