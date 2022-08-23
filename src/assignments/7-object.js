/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1
/* eslint-disable */
const obj = {
    name: 'Mark Blue',
    age: 250,
    lang: ['eng', 'fr', 'de'],
}

const person = obj.name;
console.log(person);

const year = obj.age;
console.log(year);

const language = obj.lang.map((item, index)=>{
    console.log(item)
})