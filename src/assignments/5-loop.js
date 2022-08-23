/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1

for (let number = 1; number <= 100; number++) {
    if(number % 3 === 0 && number % 5 === 0) {
        number++;
    } else if(number % 3 === 0) {
        console.log(number);
    } else if(number % 5 === 0) {
        console.log(number);
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

let num1 = prompt('Enter a positive number');

let digits = [];
for (let i = 0; i < num1.length; i++) {
    digits[i] = Number(num1.charAt(i));
}

let sum = 0;
for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
}

// console.log(sum);




/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3

let num2 = prompt('Enter a number');

for (let i = 1; i <= 10; i++) {
    let result = Number(num2) * i;
    console.log(`${num2} x ${i} = ${result}`);
}
