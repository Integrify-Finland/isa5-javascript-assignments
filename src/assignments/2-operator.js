/* eslint-disable linebreak-style */
/*
Program1: Write a program that add, subtract, multiply, divide and find the remanider of 2 numbers.

Input example
num1=20
num2=10

output example
20+10=30
20-10=10
20*10=200
20/10=2
20%10=0
*/
// start here writing the code for program1
console.log('--Program 1--');

const num1 = 20;
const num2 = 10;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const remain = (a, b) => a % b;

console.log(`${num1}+${num2}=${add(num1, num2)}`);
console.log(`${num1}-${num2}=${subtract(num1, num2)}`);
console.log(`${num1}*${num2}=${multiply(num1, num2)}`);
console.log(`${num1}/${num2}=${divide(num1, num2)}`);
console.log(`${num1}%${num2}=${remain(num1, num2)}`);

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2
console.log('--Program 2--');

const celsiusTemperature = 5;

const celsiutToFahrenheit = (temperature) => (temperature * (9 / 5)) + 32;

console.log(`${celsiusTemperature} Celsius is ${celsiutToFahrenheit(celsiusTemperature)} Fahrenheit`);
