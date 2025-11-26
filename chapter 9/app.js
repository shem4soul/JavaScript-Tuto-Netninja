// const scores = [10, 30, 15, 25, 50, 40, 5];


// // const filteredScores = scores.filter((score) => {
// //     return score > 20;
// // });


// // console.log(filteredScores);

//  const users = [
//     {name: 'Shaun', premium: true},
//     {name: 'Yoshi', premium: false},
//     {name: 'MArio', premium: false},
//     {name: 'chun-li', premium: true}
//  ];


//  const premiumUsers = users.filter((user) => {
//     return user.premium});

//  console.log(premiumUsers);
 
//map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salesPrices = prices.map((price) => {
     return price /2 } );

console.log(salesPrices);



const products = [
    {name: 'gold star', price: 20}, 
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const saleProducts = products.map((product) => {
    if (product.price > 30) {
         return {name: product.name, price: product.price / 2};
    }
    else {
        return product;
    }
});

console.log(saleProducts, products);
