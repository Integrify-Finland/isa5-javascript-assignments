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
/* eslint-disable */ 
const num1 = 20
const num2 = 10

const add = num1 + num2
console.log(add)

const subtract = num1 - num2
console.log(subtract)

const multiply = num1 * num2
console.log(multiply)

const remanider = num1 / num2
console.log(remanider)

const modulo = num1 % num2
console.log(modulo)

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2
const celsius = 5
const Fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(Fahrenheit);