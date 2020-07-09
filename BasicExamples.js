
let name = 'Deepak';
const myAge = 30;

console.log("Name:" + name);
console.log("Age:" + myAge);
console.log("Hello World")

let user = {
    name: "Deepak",
    age: 30
};

// Using dot notation
console.log(user);
console.log(user.name);

// Arrays
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
// call the function
getName();

// param based function
function greet(name, age) {
    console.log('Hello' + " " + name + ' with ' + age)
}

// function call
greet('Deepak', 24)
greet('Tom')

// return from function
function add(n1, n2) {
    return n1 + n2;
}

let sum = add(23, 34);
console.log("Sum of the numbers: " + sum);

// square of a number
function sqrOfNumber(number) {
    let root = number * number;
    return root;
}

console.log("Square of the number: " + sqrOfNumber(2));