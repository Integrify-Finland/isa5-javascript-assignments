/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1

const randomNum = Math.random() * 30 + 1;

let voterAge = Math.floor(randomNum);

console.log(voterAge);

if (voterAge >= 18) {
    console.log('Valid voter');
} else {
    console.log('Invalid voter');
}

