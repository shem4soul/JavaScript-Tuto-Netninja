//class constructor

class User {
  constructor(username, email) {
    //set properties
    this.username = username;
    this.email = email;
  }
}

const userOne = new User("johnDoe", "johnDoe@gmail.com");
const userTwo = new User("janeDoe", "janeDoe@fastermail.com");

console.log(userOne);
console.log(userTwo);

//the 'new' keyword does the following:
//1. creates a new empty object {}
//2. binds 'this' to the new empty object
//3. calls the constructor function to 'build' the object
//4. returns the object from the constructor function
