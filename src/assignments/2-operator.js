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

function add(num1,num2){

    return num1+ num2

}
add(20,10);
function subtract(num1,num2){

    return num1 - num2

}
subtract(20,10);

function multiply(num1,num2){

    return num1 * num2

}
multiply(20,10);

function divide(num1,num2){

    return num1 / num2

}
divide(20,10);


let remanider = (num1,num2) =>{
return num1 % num2
}

remanider(20,10)





/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.



Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2

function InputcelsiusTemp(currentTemperature){
    let temperatureInFahrenheit = (currentTemperature * 1.8) + 32 ;
   console.log(temperatureInFahrenheit)
}

InputcelsiusTemp(5)
