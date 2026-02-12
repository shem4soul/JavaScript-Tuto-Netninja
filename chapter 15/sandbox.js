//class constructor

class User {
  constructor(username, email) {
    //set properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incrementScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = new User("johnDoe", "johnDoe@gmail.com");
const userTwo = new User("janeDoe", "janeDoe@fastermail.com");
const userThree = new Admin("adminUser", "adminuser@gmail.com", "black-belt");

let users = [userOne, userTwo, userThree];
console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

console.log(userThree);
// userOne.deleteUser(userTwo); //error because userOne is not an admin

// console.log(userOne, userTwo);

// userOne.login().incrementScore().incrementScore().logout();

//the 'new' keyword does the following:
//1. creates a new empty object {}
//2. binds 'this' to the new empty object
//3. calls the constructor function to 'build' the object
//4. returns the object from the constructor function
