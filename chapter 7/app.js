// const form = document.querySelector('.signup-form');
// // const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//    e.preventDefault();
// //    console.log(username.value);
//    console.log(form.username.value);
   
   
// });


// // testing RegEx
// const username = 'sshemuum1';

// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username)


// console.log(result);

//   if (result) {
//     console.log('regex test passed :)');
    
//   } else {
//     console.log('regex test faied :(');
//   }


// let result = username.search(pattern);
// console.log(result);



const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback")

  //validation
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;



form.addEventListener("submit", (e) => {
  e.preventDefault();


  if (usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = 'that username is valid' 
  } else {
    //feedback help info
    feedback.textContent = 'username must contain letters only and be between 6 and 12 characters long'
  }

});

//live feedback
form.username.addEventListener('keyup', e => {
  if (usernamePattern.test(e.target.value)) {
      form.username.setAttribute('class', 'success');
  } else {
       form.username.setAttribute("class", "error");
  }
})


