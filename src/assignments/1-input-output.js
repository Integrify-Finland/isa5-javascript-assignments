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

const firstName = prompt("First name:")
const lastName = prompt("Last name:")
const userFullName = firstName + lastName

//If you use my name Frances Fogarty it should log out the ff:

console.log(userFullName) //FrancesFogarty
console.log(userFullName.length) //14
console.log(userFullName.toUpperCase()) //FRANCESFOGARTY
console.log(userFullName.charAt(2))//a

