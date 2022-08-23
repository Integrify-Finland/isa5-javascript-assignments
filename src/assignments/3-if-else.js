/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1

const num1 = Number(prompt("num1: "));
const num2 = Number(prompt("num2: "));

if (num1 < num2) {
	console.log(`minimum=${num1}`);
}
else if (num1 > num2) {
	console.log(`minimum=${num2}`);
}
else {
	console.log("Numbers are equal");
}


/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2
//vowels = a, e, i, o, u

const char = (prompt("Letter: ")).toLowerCase();

if (char.length !== 1) {
	console.log("More than one letter input");
}
else if(!(char.toUpperCase() != char.toLowerCase())) {
	console.log("Not a letter");
} 
else if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
	console.log("vowel");
}
else {
	console.log("consonant");
}

