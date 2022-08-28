/* eslint-disable linebreak-style */
/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
console.log('--Program 1--');

const input = [1, 4, 2, 3];

const sum = (arr) => arr.reduce((a, b) => a + b);
const average = (arr) => sum(arr) / arr.length;

console.log(`sum=${sum(input)}`);
console.log(`avg=${average(input)}`);

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2
console.log('--Program 2--');

console.log(`max=${Math.max(...input)}`);
console.log(`min=${Math.min(...input)}`);
