/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1
let num1 = 20;
let num2 = 10;

if (num1 < num2) {
    console.log(num1)
} else {
    console.log(num2)
};

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2

function letter(x) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
        console.log(x + " is Vowel");
    else
        console.log(x + " is Consonant");


}

letter('c');
letter('e');
//   How do I write the code such that other characters that are not alphabets are not returned as consonants? Do I have to do it manually for each cononant