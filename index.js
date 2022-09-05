require('dotenv').config()
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { questions } = require('./form');

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

client.on('disconnected', () => {
  console.log('DESCONECTADO');
});

// Form logic
class User {
  constructor(phone, lastStep) {
    this.lastStep = lastStep;
    this.phone = phone;
  }
}

let users = [];

const getUser = (phone) => {
  currentUser = users.find((user) => user.phone === phone);
  console.log('getUser()', currentUser);
  return currentUser;
};

const isNewUser = (phone) => {
  for (user of users) {
    if (user.phone === phone) {
      return false;
    }
  }
  return true;
};

// Client side logic
client.on('message', message => {
  console.log('mensaje de: ', message.from)
  console.log('isNewUser?: ', isNewUser(message.from))

  message.body = message.body.toLowerCase()

  if (isNewUser(message.from)) {
    users.push(new User(message.from, 'init'));
    currentUser = getUser(message.from);
    console.log('first lastStep: ', currentUser.lastStep)
    client.sendMessage(message.from, questions[0].content);
    return;
  }
  
  currentUser = getUser(message.from);
  console.log('lastStep: ', currentUser.lastStep)
  
  let lastQuestionKeyword = currentUser.lastStep;
  let lastQuestion = questions.find(
    (question) => question.keyword === lastQuestionKeyword
  );

  // options: [
  //   {a: 'init'},
  //   {b: 'init'}
  // ]
  
  let lastKeywordOptionObj = lastQuestion.options.find((option) => Object.keys(option)[0] === message.body);
  let lastKeywordOption = Object.values(lastKeywordOptionObj)[0]
  nextQuestion = questions.find(
    (question) => question.keyword === lastKeywordOption
  );
  client.sendMessage(message.from, nextQuestion.content);
  currentUser.lastStep = nextQuestion.keyword;

//   if (message.body === 'a') {
//     nextQuestion = questions.find(
//       (question) => question.keyword === lastQuestion.a
//     );
//     client.sendMessage(message.from, nextQuestion.content);
//     currentUser.lastStep = nextQuestion.keyword;
//   }

//   if (message.body === 'b') {
//     nextQuestion = questions.find(
//       (question) => question.keyword === lastQuestion.b
//     );
//     client.sendMessage(message.from, nextQuestion.content);
//     currentUser.lastStep = nextQuestion.keyword;
//   }

});

