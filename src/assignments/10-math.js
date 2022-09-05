/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1

let ran = new Random();
if (ran >= 18) {
    alert('valid voter')
} else {
    alert('Invalid voter')
}
console.log(ran)