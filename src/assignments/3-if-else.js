/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1
const num1 = 20
const num2 = 10

if (num1 < num2) {
    console.log(num1)
} else {
    console.log(num2)
}

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
const letter = prompt("Letter:")

if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    console.log("It's a vowel!")
} else {
    console.log("It's consonant!")
}