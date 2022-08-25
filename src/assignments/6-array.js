/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1

const number = [1,4,2,3]
let sum = 0;
for (const i of number) {
  sum = sum + i;
}
console.log(`sum = ${sum}`)

const avg = sum / number.length;
console.log(`avg = ${avg}`)

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2
const arr = [12,56,78,45];
const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(`max = ${max}`);
console.log(`min = ${min}`);