/* eslint-disable linebreak-style */
/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1
console.log('--Program 1--');
for (let i = 1; i <= 100; i += 1) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log(i);
  }
}

/*
Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8

*/
// start here writing the code for program2
console.log('--Program 2--');

const number = 125;

const sumOfDigits = (num) => +((`${num}`).split('').reduce((a, b) => a + b));

console.log(sumOfDigits(number));

/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3
console.log('--Program 3--');
const inputNumber = 3;

for (let i = 1; i <= 10; i += 1) {
  console.log(`${inputNumber} x ${i} = ${inputNumber * i}`);
}
