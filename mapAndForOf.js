var John = {
    name: 'John',
    age: 23,
    isActive: true
}

var Deepak = {
    name: 'Deepak',
    age: 23,
    isActive: true
}

var Pankaj = {
    name: 'Pankaj',
    age: 23,
    isActive: true
}

let users = new Map()

console.log(users);
console.log(typeof users); // type of users

users.set('John', John) // set key- value pair in Map
users.set('Pankaj', Pankaj)
users.set('Deepak', Deepak)

console.log(users);

console.log(users.size); // get the size of the Map

console.log(users.get('Pankaj')); // fetch the value using key

console.log(users.keys());  // print keys
console.log(users.values()); // print values

// Iterating keys of users
for (const key of users.keys()) {
    console.log(key);
}

// Iterating values of users
for (const value of users.values()) {
    console.log(value);
}

// Using 'for of' print key and value of Map
for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name);
}

// Using forEach print key and value of Map
users.forEach((value, key) => console.log(`${key} = ${value.name}`));

var  arrOfArray= [['one',1],['two',2],['three',3]] // create array of array
var newMap= new Map(arrOfArray) // create Map using that array

console.log(newMap);

// iterate through Map using for of and entries
for (const [key, value] of newMap.entries()) {
    console.log(key + ' = ' + value);
}