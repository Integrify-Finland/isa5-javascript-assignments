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

var num1 = 30;
var num2 = 45;
var add = num1 + num2;
console.log(`${num1} + ${num2} = ${add}`)

var num1 = 30;
var num2 = 45;
var substract = num1 - num2;
console.log(`${num1} - ${num2} = ${substract}`)

var num1 = 30;
var num2 = 45;
var multiply = num1 * num2;
console.log(`${num1} * ${num2} = ${multiply}`)

var num1 = 30;
var num2 = 45;
var divide = num1 / num2;
console.log(`${num1} / ${num2} = ${divide}`)

var num1 = 30;
var num2 = 45;
var remainder = num1 % num2;
console.log(`${num1} % ${num2} = ${remainder}`)

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

const celsius = prompt("Enter celsius value");
const fahrenheit = (celsius * 1.8) + 32;
console.log(`Fahrenheit = ${fahrenheit}`);
