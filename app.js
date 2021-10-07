// import functions
import { add, subtract } from './calculations.js';
// reference needed DOM elements
console.log(add(50, 120));
//addition
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');
// subtraction
const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

// set event listeners 
//event listener goes on button
addButton.addEventListener('click', () => {
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    const sum = add(num1, num2);
    addAnswer.textContent = sum;
});

subButton.addEventListener('click', () => {
    console.log('subtract button was clicked');
    const num1 = +subNumber1.value;
    const num2 = +subNumber2.value;
    const sub = subtract(num1, num2);
    subAnswer.textContent = sub;
});


    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
