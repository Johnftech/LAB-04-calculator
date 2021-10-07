// import functions
import { add } from './calculations.js';
// reference needed DOM elements
console.log(add(50, 120));
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');


// set event listeners 
//event listener goes on button
addButton.addEventListener('click', () => {
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    const sum = add(num1, num2);
    addAnswer.textContent = sum;
});
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
