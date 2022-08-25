/*
Program 1: print the numbers from 1 to 100,which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1

for (let i = 1; i <= 100; i= i + 1){
        if (i % 3 == 0 || i % 5 == 0){
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

const num = prompt("enter number")
    sum = num
        .split('')
        .map(Number)
        .reduce((a,b) => a + b);
console.log(sum); 

/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3

const multipler = prompt("enter your number");
for (let i= 1; i<=10; i++) {
    console.log(multipler,'x', i, '=', multipler*i);
}
