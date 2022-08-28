/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1

const task3a = () => {
    const num1 = Number(prompt("Enter Number 1:"));
    const num2 = Number(prompt("Enter Number 2:"));
    
    if (num1 > num2) {
        alert(`Number 1 (${num1}) is greater than Number 2 (${num2})`);
    } else if (num2 > num1) {
        alert(`Number 2 (${num2}) is greater than Number 1 (${num1})`);
    } else {
        alert(`Both Numbers are Equal`);
    }
}

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
const task3b = () => {
    let letter = prompt("Enter an Alphabet:");
    letter = letter.toLowerCase();
    
    if (letter == 'a' ||
    letter == 'e' ||
    letter == 'i' ||
    letter == 'o' ||
    letter == 'u') {
        alert(`Letter (${letter}) is a Vowel`);
    } else {
        alert(`Letter (${letter}) is a Consonent`);
    }
}