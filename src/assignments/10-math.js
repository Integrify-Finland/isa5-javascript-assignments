/*
Program 1:
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter"

*/
// start here writing the code for program1

const task10 = () => {
    let randAge = Math.floor(Math.random()*30 + 1);
    //console.log(randAge);

    if (randAge >= 18) 
        alert('Valid Voter')
    else
        alert('Invalid Voter')
}
