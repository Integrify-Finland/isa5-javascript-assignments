/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1
/* eslint-disable */
const  character='a';

switch(character){
    case character=='a' :
        console.log(`${character} is a vowel `)
    break;
    case character=='e' :
        console.log(`${character} is a vowel `)
    break;
    case character=='i' :
        console.log(`${character} is a vowel `)
    break;
    case character=='o' :
        console.log(`${character} is a vowel `)
    break;
    default:
        console.log(`${character} is a Consonant `)
        break;
}