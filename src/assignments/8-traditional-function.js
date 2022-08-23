/*
Program 1: Create 2 functions for adding and subtracting numbers and return value.

*/
// start here writing the code for program1
/* eslint-disable */

function calculation(a,b){
   const add = a + b;
   const sub = a - b;
   const mult = a * b;
   return(
    [add, sub, mult]
   )
}

console.log(calculation(12, 50))