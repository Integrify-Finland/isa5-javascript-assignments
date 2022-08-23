/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
/* eslint-disable */
const init = 0;
const arrayNumbers = [1,4,2,3];
const sumArray = arrayNumbers.reduce((prev, acc)=> prev + acc, init);
console.log(sumArray)

const avg = (sumArray / arrayNumbers.length)
console.log(avg)
/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2
const ArrayMinMax = [1,4,2,3]

const Max = Math.max(...ArrayMinMax);
console.log(Max)

const Min = Math.min(...ArrayMinMax);
console.log(Min)