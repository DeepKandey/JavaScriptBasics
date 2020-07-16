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

console.log(typeof users);

users.set('John', John)
users.set('Pankaj', Pankaj)
users.set('Deepak', Deepak)

console.log(users);
console.log(typeof users);

console.log(users.size);

console.log(users.get('Pankaj'));

console.log(users.keys());
console.log(users.values());

for (const key of users.keys()) {
    console.log(key);
}

for (const value of users.values()) {
    console.log(value);
}

for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name);
}

users.forEach((value, key) => console.log(`${key} = ${value.name}`));

var  arrOfArray= [['one',1],['two',2],['three',3]]
var newMap= new Map(arrOfArray)

console.log(newMap);

for (const [key, value] of newMap.entries()) {
    console.log(key + ' = ' + value);
}