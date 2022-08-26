/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1

let age = (Math.floor(Math.random() * 30) + 1);
console.log(age)
if (age >= 18) {
    console.log("valid voter");

} else {
    console.log("invalid voter");

};