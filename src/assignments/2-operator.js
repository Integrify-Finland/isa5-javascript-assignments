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

const task2a = () => {
    const num1 = Number(prompt("Enter Number 1:"));
    let num2;
    do {
        num2 = Number(prompt("Enter Number 2:"));
    } while (num2 <= 0);

    let result;
    
    alert(`${num1} + ${num2} = ` + (num1 + num2) + `\n
    ${num1} - ${num2} = ` + (num1 - num2) + `\n
    ${num1} * ${num2} = ` + (num1 * num2) + `\n
    ${num1} / ${num2} = ` + (num1 / num2) + `\n
    ${num1} % ${num2} = ` + (num1 % num2));
}


/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

const task2b = () => {
    const celcius = Number(prompt("Enter Temperature in Celcius \xB0C:"));
    // Celcius to Fahrenheit 
    const fahrenheit = celcius * 9 / 5 + 32;
    
    // Outputing Temp in F 
    alert(`${celcius} \xB0C == ${fahrenheit} \xB0F`);
}