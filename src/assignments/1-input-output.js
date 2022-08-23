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


const  userFirstName= prompt('Enter your first name')
const  userLastName = prompt('Enter your Last name')

//console logs
console.log(userFirstName)
console.log(userLastName)

//FullName
const fullName = `${userFirstName} ${userLastName}`
console.log(`Full Name is ${fullName}`)

//Name Total
const totalNameLength = fullName.length;
console.log(`Finding name Length is ${totalNameLength}`)

const convertName = fullName.toUpperCase();

console.log(`Name conversetion is ${convertName}`)