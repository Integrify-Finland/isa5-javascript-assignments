/*
Program1: Write a program that add, subtract, multiply, divide and find the remanider of 2 numbers.

Input example
num1=20
num2=10

output example
20+10=30
20-10=10
20*10=200
20/10=2
20%10=0
*/
// start here writing the code for program1

const num1 = Number(prompt("Number 1: "));
const num2 = Number(prompt("Number 2: "));

const add = num1 + num2;
console.log(`${num1}+${num2}=${add}`);

const sub = num1 - num2;
console.log(`${num1}-${num2}=${sub}`);

const multiply = num1 * num2;
console.log(`${num1}*${num2}=${multiply}`);

const divide = (num1, num2) => {
	if (num2 == 0) {
		console.log("undefined");
	} else {
		let answer = num1/num2.toFixed(2);
		return answer;
	}
}
const num = divide(num1, num2);
console.log(`${num1}/${num2}=${num}`);

const remain = (num1, num2) => {
	if (num2 == 0) {
		console.log("undefined");
	} else {
		let answer = num1%num2;
		return answer;
	}
}
const remainder = remain(num1, num2);
console.log(`${num1}%${num2}=${remainder}`);

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

//Formula: °F = °C * 1.8 + 32

const celsius = Number(prompt("Celcius: "));
const fahrenheit = celsius * 1.8 + 32;
console.log(`Fahrenheit=${fahrenheit}`);
