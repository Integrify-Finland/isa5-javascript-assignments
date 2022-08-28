/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1

const task6a = () => {
    let array = [1,4,2,3,6,8,32];
    let sum = array.reduce((a, b) => a + b, 0);
    let avg = sum / array.length;
    alert(`Array: ${array}\n
    sum = ${sum}\n
    avg = ${avg}`);
}

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2

const task6b = () => {
    let array = [1,4,2,3,6,8,32];

    let [max, min] = array.reduce((max_min, current) => { 
        // Maximum value 
        if (current > max_min[0]) 
           max_min[0] = current
        // Minimum value 
        if (current < max_min[1]) 
           max_min[1] = current
       return max_min; 
     },[-Infinity, Infinity]) 
    
    alert(`Array: ${array}\n
    max = ${max}\n
    min = ${min}`);
}