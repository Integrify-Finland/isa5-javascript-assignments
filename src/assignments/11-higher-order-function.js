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

//unsure why map is also needed if the point is to print all the details of those age>=30

const usersOverThirty = (users) => {
	const overThirty = users.filter(user => {
		return user.age >= 30;
	}).map(user => ({
		id: user.id,
		name: user.name,
		country: user.country
	}));
	return overThirty;
}
console.log(usersOverThirty(users));
