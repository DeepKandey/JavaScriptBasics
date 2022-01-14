const arr = [-5, -2, -6, -9];

// map
function double(x) {
  return x * 2;
}

const ouutput_double = arr.map(double);
console.log(ouutput_double);

const output_binary = arr.map((x) => x.toString(2));
console.log(output_binary);

// filter
function isOdd(x) {
  return x % 2 !== 0;
}

const output_odd = arr.filter(isOdd);
console.log(output_odd);

// reduce
const output_sum = arr.reduce(function (accumulator, currentValue) {
  accumulator = accumulator + currentValue;
  return accumulator;
}, 0);
console.log(output_sum);

const output_max = arr.reduce(function (max, currentValue) {
  if (max < currentValue) {
    max = currentValue;
  }
  return max;
});

console.log(output_max);

// map, reduce and fileter all three
const users = [
  { firstName: "John", lastName: "Abraham", age: 56 },
  { firstName: "Deepak", lastName: "Rai", age: 34 },
  { firstName: "Sudhindra", lastName: "Mahajan", age: 45 },
  { firstName: "Pankaj", lastName: "Rana", age: 34 },
];

const output_fullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(output_fullName);

const output_ageGroup = users.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue.age]) {
    accumulator[currentValue.age] = ++accumulator[currentValue.age];
  } else {
    accumulator[currentValue.age] = 1;
  }
  return accumulator;
}, {});

console.log(output_ageGroup);

const output_ageFilter = users
  .filter((user) => user.age < 35)
  .map((user) => user.firstName);

const output_ageFilter_Reduce = users.reduce((accumulator, currentValue) => {
  if (currentValue.age < 35) {
    accumulator.push(currentValue.firstName);
  }
  return accumulator;
}, []);

console.log(output_ageFilter_Reduce);

console.log(output_ageFilter);
