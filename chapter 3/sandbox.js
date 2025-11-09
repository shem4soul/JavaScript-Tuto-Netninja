//for loops

// for (let index = 0; index < 5; index++) {
//     console.log('in loop:', index);
    
// }

// console.log('Loop Finished');


// const names = ['shaun', 'mario', 'luigi', 'toad'];  

// // for (let index = 0; index < names.length; index++) {
// //     // console.log(names[index]);
// //     let html = `<div>${names[index]}</div>`
// //     console.log(html);
    
// // }

// let index = 0;
// while (index < names.length) {
//     console.log(names[index]);
//     index++;
// }


// do {
    
// } while (condition);


// if condition

// const age = 36;

// if (age > 35) {
//     console.log('you are over 30 years old');
    
// }

// const ninjas = ['shaun', 'mario', 'luigi', 'toad'];

// if (ninjas.length > 2){
//     console.log("that's a lot of ninjas");
    
// }

const password = 'sddh';

if (password.length >= 12 && password.includes('@')) {
    // console.log('password is mighty enough');
    } else if (password.length >= 8 || password.includes('@') && password.length>= 5) {
       // console.log('That password is Strong enough !');
}  else {
    //console.log('Password is not strong enough');
    
}


const scores = [ 50, 89, 0, 56, 100, 24, 76];

for (let index = 0; index < scores.length; index++) {
    
    if (scores[index] === 0) {
       continue; 
    }

//console.log('Your scores:', scores[index]);

if (scores[index] === 100) {
    //console.log('congrats, you got the top scores!');
    break;
}
    
}


// switch statements
const grade = 'D';

switch (grade) {
  case "A":
    console.log("You got an A!");
    break;
  case "B":
    console.log("You got an B!");
    break;
  case "C":
    console.log("You got an C");
    break;
  case "D":
    // console.log("You got an D!");
    break;
  case "E":
    console.log("You got an E!");
    break;
  default:
    //console.log('Not a valid grade');
    
}

// variable & block scope
let age = 30;

if (true) {
    let age = 40;
    let name = 'shewa'
    console.log('iniside 1st block scope', age, name);
    
   if (true) {
    // const age = 80;
    console.log('inside 2nd block: ', age);
    
   }

}

console.log('outside code block: ', age, name);
