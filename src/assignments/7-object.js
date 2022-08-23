/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1

const object1 = {
    name: 'Ronja',
    age: 24,
    languages: ['English', 'Polish']
};

for (const property in object1) {
    console.log(`${property}: ${object1[property]}`);
}