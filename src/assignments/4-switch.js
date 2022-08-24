/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
letter=a

output example
vowel

*/
// start here writing the code for program1

function checkVowel(x){
    switch(x){

        case"a":
        case"e":
        case"i":
        case"o":
        case"u":
        case"A":
        case"E":
        case"I":
        case"O":
        case"U":
        console.log("its a vowel")
        break;
        default: console.log("Its a consonant")
        break;
        
    
    
    
    
    }
}

checkVowel("a")