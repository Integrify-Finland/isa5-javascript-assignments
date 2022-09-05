/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1


/*const num1 = Number(prompt('Enter your number1 '));
const num2 = Number(prompt('Enter your number2 '));

if (num1 > num2) {
    console.log({ num1 }, "is greater");
} else {
    console.lo({ num2 }, "is greater");
}
*/

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
var ch;

function checkVowel() {
    ch = document.getElementById("char").value;
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        document.getElementById("res").innerHTML = "a Vowel";
    else if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        document.getElementById("res").innerHTML = "a Vowel";
    else
        document.getElementById("res").innerHTML = "a Consonant";
}