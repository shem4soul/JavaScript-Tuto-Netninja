const scores = [10, 30, 15, 25, 50, 40, 5];


// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });


// console.log(filteredScores);

 const users = [
    {name: 'Shaun', premium: true},
    {name: 'Yoshi', premium: false},
    {name: 'MArio', premium: false},
    {name: 'chun-li', premium: true}
 ];


 const premiumUsers = users.filter((user) => {
    return user.premium});

 console.log(premiumUsers);
 