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

const num1 = Number(prompt('Enter first number'));
const num2 = Number(prompt('Enter second number'));

let result;

result = num1 + num2;
console.log(`${num1}+${num2}=${result}`);

result = num1 - num2;
console.log(`${num1}-${num2}=${result}`);

result = num1 * num2;
console.log(`${num1}*${num2}=${result}`);

result = num1 / num2;
console.log(`${num1}/${num2}=${result.toPrecision(5)}`);

result = num1 % num2;
console.log(`${num1}%${num2}=${result}`);

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

const celsius = Number(prompt('Enter temperature in degrees Celsius'));

let fahrenheit = celsius * 1.8 + 32;

console.log(`The temperature is ${fahrenheit}°F`);