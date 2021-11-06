// const add = document.getElementById('add');
// const deduce = document.getElementById('deduce');
// const multiply = document.getElementById('multiply');
// const divide = document.getElementById('divide');
// const result = document.getElementById('result');
// const first = document.getElementById('first');
// const second = document.getElementById('second');

// add.addEventListener('click', (e) => {
//     result.textContent = Number(first.value) + Number(second.value);
//     console.log(first.value);
//     e.preventDefault();
// });

// deduce.addEventListener('click', (e) => {
//     result.textContent = Number(first.value) - Number(second.value);
//     console.log(first.value);
//     e.preventDefault();
// });

// multiply.addEventListener('click', (e) => {
//     result.textContent = Number(first.value) * Number(second.value);
//     console.log(first.value);
//     e.preventDefault();
// });

// divide.addEventListener('click', (e) => {
//     result.textContent = Number(first.value) / Number(second.value);
//     console.log(first.value);
//     e.preventDefault();
// });

// ####################################################

// const add = document.getElementById('add');
// const deduce = document.getElementById('deduce');
// const result = document.getElementById('result');
// const inp = document.getElementById('inp');

// inp.addEventListener('keyup', (e) => {
//     result.textContent = inp.value;
//     e.preventDefault();
// });

// add.addEventListener('click', (e) => {
//     const size = result.style.fontSize;
//     result.style.fontSize = `${Number(size.split('p')[0]) + 2}px`;
// });

// deduce.addEventListener('click', (e) => {
//     const size = result.style.fontSize;
//     result.style.fontSize = `${Number(size.split('p')[0]) - 2}px`;
// });

// console.log(result.style.fontSize);

// ######################################################

// const h1 = document.getElementById('h1');
// const h2 = document.getElementById('h2');
// const h3 = document.getElementById('h3');
// const result = document.getElementById('result');
// const inp = document.getElementById('inp');

// inp.addEventListener('keyup', (e) => {
//     result.textContent = inp.value;
//     e.preventDefault();
// });

// document.querySelectorAll('button').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if(btn.textContent === 'h1') {
//             result.innerHTML = `<h1>${result.textContent}</h1>`;
//         } else if(btn.textContent === 'h2') {
//             result.innerHTML = `<h2>${result.textContent}</h2>`;
//         } else {
//             result.innerHTML = `<h3>${result.textContent}</h3>`;
//         }
//         e.preventDefault();
//     });
// });

// #########################################################

// const red = document.getElementById('red');
// const green = document.getElementById('green');
// const blue = document.getElementById('blue');
// const result = document.getElementById('result');
// const inp = document.getElementById('inp');

// inp.addEventListener('keyup', (e) => {
//     result.textContent = inp.value;
//     e.preventDefault();
// });

// document.querySelectorAll('button').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if(btn.textContent === 'red') {
//             result.style.color = 'red';
//         } else if(btn.textContent === 'green') {
//             result.style.color = 'green';
//         } else {
//             result.style.color = 'blue';
//         }
//         e.preventDefault();
//     });
// });

// ############################################################

// document.getElementById('loaded').addEventListener('click', (e) => {
//     document.getElementById('loading').style.visibility = 'hidden';
//     e.preventDefault();
// });

// ###########################################################

// first Way (button disabled)

// const pass = document.getElementById('pass');

// pass.addEventListener('keyup', (e) => {
//     let text = pass.value;
//     if(text.length < 10) {
//         document.querySelector('button').disabled = true;
//     } else {
//         document.querySelector('button').disabled = false;
//     }
// });

// Second Way (color change)

// const pass = document.getElementById('pass');

// pass.addEventListener('keyup', (e) => {
//     let text = pass.value;
//     if(text.length < 10) {
//         pass.style.backgroundColor = 'red';
//     } else {
//         pass.style.backgroundColor = 'green';
//     }
// });

// Third Way (success and error)

// const pass = document.getElementById('pass');

// document.querySelector('button').addEventListener('click', (e) => {
//     let text = pass.value;
//     if(text.length < 10) {
//         alert('Error: Please provide a password of length 10 or more');
//     } else {
//         alert("Success: Strong password");
//     }
// });

// ###############################################################

