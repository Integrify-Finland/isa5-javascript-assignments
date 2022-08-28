/* eslint-disable linebreak-style */
/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1
const letterInput = 'a';

const VowelOrConsonant = (letter) => {
  const vowels = 'aeiou';

  switch (vowels.indexOf(letter.toLowerCase())) {
    case -1:
      return 'consonant';

    default:
      return 'vowel';
  }
};

console.log(VowelOrConsonant(letterInput));
