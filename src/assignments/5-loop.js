/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1
for (let i = 1; i < 100; i + 3) {
    console.log(i)
}

/*
Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8

*/
// start here writing the code for program2

/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3
const number = Number(prompt("Enter a number:"))

for(let i = 1; i <= 10; 1++) {
    const result = i * number
    console.log(`${number} * ${i} = ${result}`)
}