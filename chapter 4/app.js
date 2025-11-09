// function delclaration

// function greet(params) {
//     console.log(('Hello there!'));
    
// }

// greet();


// const speak = function (params) {
//     console.log('Good day!');
// };

// speak();

// arguments and parameters

// const speak = function (name = 'fejiro', time = 'morning') {
//     console.log(`good ${time}, ${name}`);
    
// }

// speak( 'dorcas', 'afternnon');

// const calcArea = radius =>    3.14 * radius**2;
    

// const MathPie = calcArea(5);
// console.log('area is:', MathPie);


// const greet = function (params) {
//     return 'hello world';
// };


// const greet = () => 'hello world';

// const result = greet();
// console.log(result);



// const bill= function (products, tax) {
    
//       let total = 0;
//     for (let index = 0; index < products.length; index++) {
//   total += products[index] + products[index] * tax;
        
//     }
//     return total;
// }
 
// const bill =  (products, tax) =>{
//      let total = 0;
//     for (let index = 0; index < products.length; index++) {
//   total += products[index] + products[index] * tax;
        
//     }
//     return total;
// }


// console.log(bill([10,15, 30], 0.2))


const name = 'Shaun';

// functions

const greet = () => 'hello';

let resultOne = greet();

console.log(resultOne);


//methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);



//callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
}

myFunc(value => {
    //do something
     console.log(value);
});


//callbacks & foreach

//get a refrence to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach((person)  => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;