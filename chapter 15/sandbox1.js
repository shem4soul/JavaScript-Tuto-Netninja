//old constructor function syntax
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} just logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} just logged out`);
  return this;
};

const userOne = new User("johnDoe", "johndoe@gmail.com");
const userTwo = new User("janeDoe", "janedoe@yahoomail.com");
console.log(userOne, userTwo);

userOne.login().logout();
