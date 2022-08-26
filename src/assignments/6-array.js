/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let i = 0; i < num.length; i++) {
    sum += num[i];
}
let average = sum / num.length
console.log("sum=", sum);
console.log("avg=", average);

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2

console.log("min=", Math.min(...num));
console.log("max=", Math.max(...num));