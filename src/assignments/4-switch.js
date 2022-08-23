/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1

const char = (prompt("Letter: ")).toLowerCase();

if (char.length !== 1) {
	console.log("More than one letter input");
}
else if (!(char.toUpperCase() != char.toLowerCase())) {
	console.log("Not a letter");
}
else {
	switch (char) {
		case 'a':
			console.log("vowel");
			break;
		case 'e':
			console.log("vowel");
			break;
		case 'i':
			console.log("vowel");
			break;
		case 'o':
			console.log("vowel");
			break;
		case 'u':
			console.log("vowel");
			break;
		case 'a':
			console.log("vowel");
			break;
		default:
			console.log("consonant");
	}
}

