const users = [{
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

const above30Filter = users.filter(ages => ages.age >= 30);
console.log(above30Filter)

const above30Map = users.map(function(ages) { return `${users.age}[${users.id} -${users.name}-${users.company}]`; });
console.log(above30Map);