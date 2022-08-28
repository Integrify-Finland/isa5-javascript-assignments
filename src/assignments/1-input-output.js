/* eslint-disable linebreak-style */
const prompt = require('prompt-sync')();

/*
Program 1: Input-Output program (String Methods)
input -> user first name (you can use prompt)
input -> user last name (you can use prompt)
print full name without using any string methods
find out total length of user's full name
convert full name into uppercase
print the 3rd character from users full name
*/
// start here writing the code for program1
const firstName = prompt('Enter your first name: ');
const lastName = prompt('Enter your last name: ');

const fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(`Length of full name is ${fullName.length}`);
console.log(`Full name in uppercase: ${fullName.toUpperCase()}`);
console.log(`3rd char of full name is ${fullName[3 - 1]}`);
