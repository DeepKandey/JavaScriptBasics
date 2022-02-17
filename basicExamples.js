// let for variable, const for constants
let name = 'Deepak';
const myAge = 30;

console.log("Name:" + name);
console.log("Age:" + myAge);
console.log("Hello World")

//--------- objects -----------
let user = {
    name: "Deepak",
    age: 30
};

console.log(user);
console.log(user.name); // access properties using dot

//------------- Arrays---------------------
let language = []; // Earlier empty array declared
language = ['Java', 'javascript']; // update array

console.log("Array Example: \n" + language);
console.log("Length of the array " + language.length);
console.log("First element of the array " + language[0]);
console.log("Third element of the array " + language[2]);

// --------------Functions----------------------

// functions
function getName() {
    console.log('This is my function');
}

getName(); // function call

// param based function
function greet(name, age) {
    console.log('Hello' + " " + name + ' with ' + age)
}

// function call
greet('Deepak', 24);
greet('Tom');

// return from function
function add(n1, n2) {
    return n1 + n2;
}

let sum = add(23, 34);
console.log("Sum of the numbers: " + sum);

//----------- Random number----------------

console.log((22/7).toFixed(2)); // round to 2 decimal places

console.log(Math.floor(22/7)); // round to nearest number on lower side

console.log(Math.ceil(22/7)); // round to nearest number on lower side

console.log((Math.random())*10); // Get random number between 1 to 10 numbers