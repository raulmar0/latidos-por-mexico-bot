require('dotenv').config()
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Environment variables
const country_code = process.env.COUNTRY_CODE;
const number = process.env.NUMBER;
const msg = process.env.MSG;

// Initialization process
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
              console.log("Pam is ready to work");
          }
      })
  }, 5000);
});

// Form logic
class User {
  constructor(phone, lastStep) {
    this.lastStep = lastStep;
    this.phone = phone;
  }
}

let users = [];
let currentUserLastStep;

const isNewUser = (phone) => {
  for (user of users) {
    if (user.phone === phone) {
      return false;
    }
  }
  return true;
};
  
const searchLastStep = (phone) => {
  currentUser = users.findIndex((user) => user.phone === phone);
  return users[currentUser].lastStep;
};

const changeLastStep = (phone, newStep) => {
  currentUser = users.findIndex((user) => user.phone === phone);
  users[currentUser].lastStep = newStep;
  return
}

// Client side logic
client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
  
  console.log('is new user?', isNewUser(message.from));
  
  if (isNewUser(message.from)) {
    usersLength = users.length;
    users.push(new User(message.from, 0));
  }
  
  currentUserLastStep = searchLastStep(message.from);
  console.log('Current user last step: ',currentUserLastStep);
  
  if (currentUserLastStep === 0) {
    client.sendMessage(message.from, `
      1. te mando al 1a
      2. te mando al 1b
    `);
    changeLastStep(message.from, 1)
    return;
  }
  if (message.body === '1' && currentUserLastStep === 1) {
    client.sendMessage(message.from, `
      1. te mando al 2a
      2. te mando al 2b
    `);
  }

});

