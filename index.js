require('dotenv').config()
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { questions, errorString } = require('./questions');
let { User, users, getUser, isNewUser } = require('./utils')

// Environment variables
const country_code = process.env.COUNTRY_CODE;
const number = process.env.NUMBER;
const msg = process.env.MSG;

// Initialization process
const client = new Client({
  authStrategy: new LocalAuth(),
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


// Diagram resolving logic
client.on('message', message => {
  if(message.body === 'easteregg'){
    client.sendMessage(message.from, '¯\_( ͠• ͜ʖ ͡•)_/¯');
    return
  }

  message.body = message.body.toLowerCase()

  // When is a new user, we add it to a "register" of users
  // and we display the first question
  if (isNewUser(message.from)) {
    users.push(new User(message.from, 'init'));
    client.sendMessage(message.from, questions[0].content);
    return;
  }
  
  currentUser = getUser(message.from);

  // 1. We take the last keyword registered by the user
  let lastQuestionKeyword = currentUser.lastStep;
  // 2. We search the whole question from questions.js
  let lastQuestion = questions.find(
    (question) => question.keyword === lastQuestionKeyword
  );
  // 3. We find a match of the received msg in the options of the question
  let answerMatchObj = lastQuestion.options.find((option) => Object.keys(option)[0] === message.body) || 'not found';
  let answerMatchKeyword = Object.values(answerMatchObj)[0];

  if (answerMatchObj === 'not found') {
    client.sendMessage(message.from, errorString)
  }

  // 4. We search a match of the match's keyword on questions.js
  let nextQuestion = questions.find(
    (question) => question.keyword === answerMatchKeyword
  );

  client.sendMessage(message.from, nextQuestion.content);
  currentUser.lastStep = nextQuestion.keyword;

});

