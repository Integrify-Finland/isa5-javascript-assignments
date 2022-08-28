/*
Program 1: Create an object has property name, age, languages and print everything
notes: languages should hold multiple values

*/
// start here writing the code for program1

const task7 = () => {
    let person = {
        name: "Zia Ur Rehman",
        age: 25,
        languages: ['Urdu', 'English']
    };
    alert(JSON.stringify(person,null,1));
}