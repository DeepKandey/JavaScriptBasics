// Any function which uses another function as argument ot return a function is a higher order function

function x() {
  console.log("Namaste Deepak");
}

// y as higher order functions
function y(x) {
  x();
}

y(x);

// Area/Perimeter/diameter of circles
const arrayOfRadius = [2, 3, 6, 7];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// logic is callback function and calculate is higherOrderFunction
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(arrayOfRadius, area));
console.log(calculate(arrayOfRadius, circumference));
console.log(calculate(arrayOfRadius, diameter));
