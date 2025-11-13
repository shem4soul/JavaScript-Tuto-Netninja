// //query selector


// // const para = document.querySelector('body > div > p:nth-child(2)');
// // console.log(para);


// // const paras = document.querySelectorAll('p');

// // paras.forEach(para =>{
// //     console.log(para);
// // })

// // const error = document.querySelectorAll('.error');

// // error.forEach(erro => {
// //     console.log(erro);
// // })

// // // console.log(errors);



// // //get element by Id
// // const title = document.getElementById('page-title');
// //   console.log(title);


// //   //get elements by their class name
// //   const errors = document.getElementsByClassName('error');
// //   console.log(errors);
// //   console.log(errors[0]);
  
// //   //get elements by their tag name
// //   const paras = document.getElementsByTagName('p');
// //   console.log(paras);
// //   console.log(paras[1]);
  
  

// // const para = document.querySelector('p');
// // // console.log(para.innerText);
// // // para.innerText += ' ninjas are awesome!';

// // const paras = document.querySelectorAll('p');
// // paras.forEach(para =>{
// //      console.log(para.innerText);
// //      para.innerText += ' new text ';
     
// // })

// // const content = document.querySelector('.content');
// // // console.log(content.innerHTML);
// // // content.innerHTML += '<h2>This is a new h2</h2>';

// // const people = ['mario', 'luigi', 'yoshi'];

// // people.forEach(person => {
// //   content.innerHTML += `<p>${person}</p>`;
// // })


// // const link = document.querySelector('a');

// // console.log(link.getAttribute('href'));
// // link.setAttribute('href', 'https://www.thenetninja.co.uk');
// // link.innerText = ' The net ninja website';


// // const mssg = document.querySelector('p');
// // console.log(mssg.getAttribute('class'));
// // mssg.setAttribute('class', 'success');
// // mssg.setAttribute('style', 'color:red;');


// // const title = document.querySelector('h1');
// // // title.setAttribute('style', 'margin: 50px;');

// // console.log(title.style);
// // console.log(title.style.color);

// // title.style.margin = '50px';
// // title.style.color = 'crimson';
// // title.style.fontSize = '60px';

// // title.style.margin = '';

// // const content = document.querySelector('p');

// // console.log(content.classList);

// // content.classList.remove('error');

// // content.classList.add('success');


// // const paras = document.querySelectorAll('p');

// // paras.forEach(p => {
// //     if (p.textContent.includes('error')) {
// //         p.classList.add('error');
// //     }
// //       if (p.textContent.includes("success")) {
// //         p.classList.add("success");
// //       }
// // })


// // const title = document.querySelector('.title');

// // title.classList.toggle('test');

// // title.classList.toggle("test");




// const article = document.querySelector('article');

// // console.log(article.children);
// // console.log(Array.from(article.children));
// // console.log(article.children);


// // Array.from(article.children).forEach(child => {
// //     child.classList.add('article-element')
// // });

// const title = document.querySelector('h2');

// console.log(title.parentElement);

// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining
// console.log((title.nextElementSibling.parentElement.children));


// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('You clicked me');
    
// })


const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    //  ul.innerHTML += '<li> something new </li>';
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li);
    ul.prepend(li);
})


// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('event in LI');
//         // console.log(e);
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         e.stopPropagation();
//         e.target.remove();
//     });
// });


ul.addEventListener('click', e => {
    // console.log('event in UL');
    // console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})