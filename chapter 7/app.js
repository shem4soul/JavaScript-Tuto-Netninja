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
const feedback = document.querySelector(".feedback");

const usernamePattern = /^[a-z]{6,12}$/;

// Submit validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value.trim();

  console.log("Submitted username:", username);
  console.log("Submit validation result:", usernamePattern.test(username));

  if (usernamePattern.test(username)) {
    feedback.textContent = "That username is valid!";
    feedback.style.color = "green";
  } else {
    feedback.textContent =
      "Username must contain lowercase letters only and be 6–12 characters long.";
    feedback.style.color = "red";
  }
});

// Live feedback
form.username.addEventListener("keyup", (e) => {
  const value = e.target.value.trim();
  const isValid = usernamePattern.test(value);

  console.log("Typed:", value, "| Valid:", isValid);

  if (isValid) {
    form.username.classList.add("success");
    form.username.classList.remove("error");
  } else {
    form.username.classList.add("error");
    form.username.classList.remove("success");
  }
});
