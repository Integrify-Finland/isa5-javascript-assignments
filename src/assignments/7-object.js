/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1

const user = {
    name: "Emelia Earheart",
    age: 60,
    languages: ["English", "Swedish", "Spanish", "French"],
}

console.log(
    `Hello! I am ${user.name}. 
    I am ${user.age}. 
    I speak 4 languages fluently: 
    ${user.languages[0]} 
    ${user.languages[1]} 
    ${user.languages[2]} 
    ${user.languages[3]}.`
    )