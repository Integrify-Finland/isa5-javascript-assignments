/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1

const num1 = 7;
const num2 = 45;
if (num1 < num2) {
    console.log(`minimum = ${num1}`);
}
else {
    console.log(`minimum = ${num2}`);
}

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
const letter = prompt("Enter your letter");
if (letter == 'a' || letter == 'e' || letter =='i' || letter =='o' ||letter == 'u'){
    console.log(`${letter} is vowel`);
}
else if (letter == 'A' || letter == 'E' || letter =='I' || letter =='O' ||letter == 'U') {
    console.log(`${letter} is vowel`);
}
else {
    console.log(`${letter} is consonant`);
}