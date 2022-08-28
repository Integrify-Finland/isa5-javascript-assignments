/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/
// start here writing the code for program1



function sumOfArray(array){
    let sum = 0;
    let average ;
    
    array.forEach(element => {
       
        sum+=element;
    
        
    });
    console.log(sum)
    console.log(`Sum of Array is : ${sum}`)
    
    average = sum/array.length
    
    console.log(`Avaerage is ${sum/array.length}`)
    
    
    
    }
    
    sumOfArray([1,2,3,4])

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/
// start here writing the code for program2


let array =[1,4,2,3];

function minAndMax(){

    let minNum = Math.min(...array)
    let maxNum = Math.max(...array)

    console.log(`MAximum Number is: ${maxNum}`)
    console.log(`min Number is: ${minNum}`)
}

minAndMax()