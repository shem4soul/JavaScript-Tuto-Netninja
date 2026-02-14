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

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  //delete user from users array
  users = users.filter((u) => u.username !== user.username);
};

const userOne = new User("johnDoe", "johndoe@gmail.com");
const userTwo = new User("janeDoe", "janedoe@yahoomail.com");
const userThree = new Admin("adminUser", "shem4soul@gmail.com", "black-belt");

console.log(userOne, userTwo, userThree);

userOne.login().logout();
