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

module.exports = { User, users, getUser, isNewUser };