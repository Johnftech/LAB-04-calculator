// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../calculations.js';

const test = QUnit.test;


// name your test by what it is testing
test('adds two numbers 5 and 3', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('adds two numbers 4 and 3', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 7;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//subtract
test('subtracts two numbers 5 and 4', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 4;
    const expected = 1;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

test('this multiplies two numbers 6 and 6', (expect) => {
    const x = 6;
    const y = 6;
    const expected = 36;

    const actual = multiply(x, y);

    expect.equal(actual, expected);


});

test('this divides two numbers 4 and 2', (expect) => {
    const x = 4;
    const y = 2;
    const expected = 2;

    const actual = divide(x, y);

    expect.equal(actual, expected);


});

//export functions
