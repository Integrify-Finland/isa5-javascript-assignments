/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.

*/
/*
num = prompt('Enter the number')
for (let i = 1; i < num; i++) {
    //num[i] = prompt('Enter the number')
    if (num[i] % 5 === 0 || num[i] % 3 == 0) {
        console.log(num[i]);
    }
    else{
        return 'wrong number';
    }
    // console.log(num[i]); // console.log(num[i]); // console.log(num[
}
*/
// start here writing the code for program1

/*
for (int i = 1; i < a; i++) {
if(a[i]%3==0 && a[i]%5==0 )
document.write(a);
}
else {
    document.write('WRONG');
}
Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8

*/

// start here writing the code for program2
let sum = 0;
a = prompt('Enter the positive number')
while (a > 0) {
    sum = sum + (a % 10)
    num = num //10
    alert(sum)
}
/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/
// start here writing the code for program3
n = prompt('Enter the number')
for (let i = 0; i <= 20; i++) {
    table = n * i
    console.log(table);

}