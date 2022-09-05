/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1

const person = {
    name: 'pradip',
    age: 25,
    language: 'English',
}

function details() {
    return this.name + ' ' + this.languages + ' ' + this.age;
}