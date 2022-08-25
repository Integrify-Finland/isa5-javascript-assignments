/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1
const letter = prompt("Enter your letter");
switch (letter) {
  case 1:
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u";
    console.log(`${letter} is vowel`);
    break;
  case 2:
      letter == "A" ||
      letter == "E" ||
      letter == "I" ||
      letter == "O" ||
      letter == "U";
    console.log(`${letter} is vowel`);
    break;
  default:
    console.log(`${letter} is consonant`);
}
