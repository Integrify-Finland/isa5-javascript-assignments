/* eslint-disable linebreak-style */
/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1
const randomNum = Math.floor(Math.random() * 100);

console.log(randomNum);

if (randomNum >= 18) {
  console.log('Valid voter');
} else if (randomNum < 18) {
  console.log('Invalid voter');
}
