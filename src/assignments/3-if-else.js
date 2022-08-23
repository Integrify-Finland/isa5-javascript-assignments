/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1

const num1 = Number(prompt('Enter first number'));
const num2 = Number(prompt('Enter second number'));

if (num1<num2) {
    console.log(`${num1} is the minimum`);
} else if (num1>num2) {
    console.log(`${num2} is the minimum`);
} else
console.log('The numbers are equal');

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2

const letter = prompt('Enter a letter');

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y') {
    console.log('Vowel');
} else {
    console.log('Consonant');
}