/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1
const data = [1,4,2,3];
let sum=0;
let avg=0;
for(let i=0; i< data.length; i++)
{
    sum+=data[i];
    avg=sum/data.length;
}
console.log(sum);
console.log(avg);
/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2
let j=0;
let i=0;
 const input = [1,4,2,3];
 console.log(input.sort() );

console.log(`max= ${input[input.length - 1]}`);
console.log(`min= ${input[0]}`);

  
 

