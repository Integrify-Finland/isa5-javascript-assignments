/* eslint-disable linebreak-style */
/*
Program 1: Create 2 functions for adding and subtracting numbers and return value.

*/
// start here writing the code for program1
const num1 = 20;
const num2 = 10;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(`${num1}+${num2}=${add(num1, num2)}`);
console.log(`${num1}-${num2}=${subtract(num1, num2)}`);
