/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/

// start here writing the code for program1
const arr = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    return sum;
}
avearge = sum % arr.length;
console.log(avearge);





/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/

// start here writing the code for program2

const program2 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(Math.max(program2));
console.log(Math.min(program2));
/*
const myArray = [20, 23, 27];

let maxElement = myArray[0];
for (let i = 1; i < arrayLength; ++i) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
    }
}

console.log(maxElement); // 27
*/