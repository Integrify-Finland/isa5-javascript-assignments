/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
// start here writing the code for program1

for(let count = 1; count<= 100; count++)
{
  if(!(count%3===0 && count%5===0) )
    {
      if(count%3===0 || count%5===0)

      {console.log(count);}

    }
  
    

}

   
  
/*

Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8

*/
// start here writing the code for program2


let sum = 0;
 let num = 125;
 while(num!=0)
 {
  sum=sum+num%10;
  num=num/10;
 }
 console.log(sum);

    




/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3
let number = 3;
let i = 1;
let result;
for(i=1; i<=10; i++)
{ 
  result = number * i;
    console.log(`${number} * ${i} = ${result}`);
    
}