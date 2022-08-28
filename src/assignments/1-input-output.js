/*
Program 1: Input-Output program (String Methods)
input -> user first name (you can use prompt)
input -> user last name (you can use prompt)
print full name without using any string methods
find out total length of user's full name
convert full name into uppercase
print the 3rd character from users full name
*/
// start here writing the code for program1

// Inputting Name

const task1 = () => {
    const firstName = prompt('Enter First Name:');
    const lastName = prompt('Enter Last Name:');

    // Printing Full Name
    alert(`Full Name is '${firstName} ${lastName}'`);

    let fullName = firstName + lastName;
    // Full Name Length | Full Name in Uppercase | 3rd character
    alert(`Name Length: ${fullName.length}\n
        Name in Uppercase: ${fullName.toUpperCase()}\n
        3rd character in Name: ${fullName.charAt(2)}`);
}
