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


const usersOverThirty = (users) => {
	users.map((item) => {
		if (item.age >= 30){
			item.id,
			item.name,
			item.age,
			item.country
			console.log(item);
		}
	})
}

const overThirtyFilter = (users) => users.filter(item => item.age >= 30);
const overAge = overThirtyFilter(users);
console.log(overAge);