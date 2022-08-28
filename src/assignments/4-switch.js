/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1
const task4 = () => {
    let letter = prompt("Enter an Alphabet:");
    letter = letter.toLowerCase();
    
    switch(letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            alert(`Letter (${letter}) is a Vowel`);
            break;
        default:
            alert(`Letter (${letter}) is a Consonent`);
            break;
    }   
} 
