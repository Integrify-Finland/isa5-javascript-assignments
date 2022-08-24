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
// start here writing the code for program


let num1 = 10;
let num2 = 20;
let result;

 function add (num1,num2) {
    result = num1 + num2;
    console.log(`  ${num1} + ${num2} = ${result} `);
     }
     function sub  (num1,num2) {
        result = num1 - num2;
        console.log(`  ${num1} - ${num2} = ${result} `);
         }
         function  mul  (num1,num2) {
            result = num1 * num2;
            console.log(`  ${num1} * ${num2} = ${result} `);
             }
             function div  (num1,num2) {
                result = num1 / num2;
                console.log(`  ${num1} / ${num2} = ${result} `);
                 }
                 function rem (num1,num2) {
                    result = num1 + num2;
                    console.log(`  ${num1} % ${num2} = ${result} `);
                     }


add(num1,num2);
sub(num1,num2);
mul(num1,num2);
div(num1,num2);
rem(num1,num2);





/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/
// start here writing the code for program2
//F = c * 1.9 + 32;


let celsius = prompt("Enter Celsius Value");
let res;
const Fahrenheit = (celsius) => {
    res = celsius * 1.9 + 32;
    console.log(`Fahrenheit = ${res}`);

}
Fahrenheit(celsius);