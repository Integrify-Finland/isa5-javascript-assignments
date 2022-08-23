/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1



/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2

const input = [-19,1,4,6,2,10,-10];
let max = input[0]; //1
let min = input[0]; //1

for (let i = 1; i < input.length; i++) {
	if (input[i] < min) {
		min = input[i];
	}
	if (input[i] > max) {
		max = input[i];
	}
}
console.log(`max=${max} min=${min}`);
