/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1
const task5a = () => {
    for (let number = 1; number <= 100; number++) {
        if(number % 3 == 0 && number % 5 == 0) {
            continue;
        } else if(number % 3 == 0 || number % 5 == 0) {
            console.log(number);
        }
    } 
} 

/*
Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8
6
*/
// start here writing the code for program2

const task5b = () => {
    const number = prompt('Enter Positive Number: ');
    let digits = number.split("");
    let sum = digits.reduce((a, b) => Number(a) + Number(b), 0);
    
    alert(`sum = ${sum}`);
}

/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3
const task5c = () => {
    const number = prompt('Enter a Number: ');
    for (let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${(number*i)}`);
    }
}