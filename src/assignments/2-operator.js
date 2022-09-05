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

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2



function add(a, b) {
    var add = a + b;
    return add;

}

function substract(a, b) {
    var sub = a - b;
    return sub;
}


function multiply(a, b) {
    var mul = a * b;
    return mul;
}

function divide(a, b) {
    var divide = a % b;
    return divide;
}

console.log(add(10, 20));
console.log(substract(10, 20));
console.log(multiply(10, 20));
console.log(divide(1020));

var total = add(20, 10);
console.log(total);