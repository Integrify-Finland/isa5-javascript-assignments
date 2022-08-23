/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1
/* eslint-disable */

const random = Math.floor(Math.random() * 30)

if(random >= 18) {
    console.log(`Valid Voter with age ${random}`)
}else {
    console.log(`Invalid Voter! You are too young ${random}`)
}
