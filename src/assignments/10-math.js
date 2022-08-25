/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1

function checkVoter(){

    let randomNumber = Math.floor(Math.random()*30)

    if(randomNumber>18){
        console.log(`You are a valid Voter and Voter Number Is ${randomNumber}`)
    }else{
        console.log(`You are not  Invalid Voter and Voter Number Is ${randomNumber} `)
    }
}

checkVoter()