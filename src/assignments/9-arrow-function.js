/*
Program 1: Create 2 functions for adding and subtracting numbers and return value.

*/
// start here writing the code for program1
let sum = (num1, num2) => {
    return {
        sum: num1 + num2,

    };
};

let diff = (num1, num2) => {
    return {
        diff: num1 - num2
    };
}
console.log(sum(10, 3));
console.log(diff(7, 4));