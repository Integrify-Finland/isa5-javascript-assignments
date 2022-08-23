/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1

let array1 = [1, 4, 2, 3];

let sum = 0;
array1.forEach(number =>
sum += number);

let avg = sum / array1.length;

console.log(`sum=${sum}`);
console.log(`avg=${avg}`);

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2

let array2 = [1, 4, 2, 3];

console.log(`max=${Math.max(...array2)}`);
console.log(`min=${Math.min(...array2)}`);