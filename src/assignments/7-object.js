/* eslint-disable linebreak-style */
/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1
const person = {
  name: 'Andrew',
  age: 24,
  languages: ['Ukrainian', 'Russian', 'English', 'Germany'],
};

// eslint-disable-next-line no-restricted-syntax
for (const [prop, val] of Object.entries(person)) {
  console.log(`${prop}: ${val}`);
}
