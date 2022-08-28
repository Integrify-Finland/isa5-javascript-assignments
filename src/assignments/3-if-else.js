/* eslint-disable linebreak-style */
/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1
console.log('--Program 1--');

const num1 = 20;
const num2 = 10;

const findMin = (a, b) => ((a < b) ? a : b);

console.log(`Min of ${num1} and ${num2} is ${findMin(num1, num2)}`);

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
console.log('--Program 2--');

const letterInput = 'a';

const VowelOrConsonant = (letter) => {
  const vowels = 'aeiou';
  return (vowels.includes(letter.toLowerCase())) ? 'vowel' : 'consonant';
};

console.log(VowelOrConsonant(letterInput));
