const users = [
  {
    id: 1,
    name: 'anisul islam',
    age: 32,
    country: 'Bangladesh',
  },
  {
    id: 2,
    name: 'robert william',
    age: 31,
    country: 'Denmark',
  },
  {
    id: 3,
    name: 'Miltion',
    age: 28,
    country: 'Sweden',
  },
  {
    id: 4,
    name: 'Rakib',
    age: 25,
    country: 'Sweden',
  },
  {
    id: 5,
    name: 'Ali',
    age: 32,
    country: 'Pakistan',
  },
];

// Program 1: create a function and print the user details whose age>=30 (use filter and map)

const filtered = users.filter(userData => userData.age >= 30);

for (const user in filtered) {
  console.log(filtered[user].id);
  console.log(filtered[user].name);
  console.log(filtered[user].age);
  console.log(filtered[user].country);
}

// Could not figure out how to use map in this process, not what you were looking for but I figured out this way instead