/*
Program1: Write a program that read two numbers and display minimum.

Input example
num1=20
num2=10

output example
minimum=10
*/
// start here writing the code for program1

function minimumNum(num1,num2){
    if(num1 > num2 ){
        console.log(num1)

    }else{
        console.log(num2)
    }
}

minimumNum(10,20)

/*
Program2: Write a program that read any letter and display vowel or consonant.

Input example
letter=a

output example
vowel
*/
// start here writing the code for program2

let  CheckLetter = (letter) =>{

    if(CheckLetter== "a" || CheckLetter == "e"|| CheckLetter == "i"|| CheckLetter == "o"|| CheckLetter == "u"  ){
        console.log("Letter Is Vowel")
    }else if(CheckLetter== "A" || CheckLetter == "E"|| CheckLetter == "I"|| CheckLetter == "O"|| CheckLetter == "U"  ){
        console.log("Letter Is Vowel")
    }else{
        console.log("Letter Is NOT Vowel")
    }
}

CheckLetter(a)
