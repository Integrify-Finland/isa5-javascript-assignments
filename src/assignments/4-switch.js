/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1

const letter = prompt('Enter a letter');

switch(letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
}