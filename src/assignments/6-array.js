/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
const array = [1, 4, 2, 3]
const sum = arr.reduce((partialSum, a) => partialSum + a, 0)
const avg = sum / arr.length;
console.log(sum)
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
const numberArray = [1, 4, 2, 3]
const min = Math.min(...numberArray)
const max = Math.max(...numberArray)

console.log(`Minimum number in the array is ${min}`)
console.log(`Maximum number in the array is ${max}`)