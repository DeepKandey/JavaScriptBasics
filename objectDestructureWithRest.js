// rest parameters

let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

showProducts(10, "Apple", "Pear", "Watermelon");

let showFruits = function (id, ...products) {
  console.log(id);
  console.log(products[0]);
};

console.log(typeof showFruits);
showFruits(10, ["Apple", "Pear", "Watermelon"]);

// spread parameters

let points = [1, 2, 3, 4, 50, 60, 14];
console.log(...points);
console.log(Math.max(...points));

console.log(..."ABC", "D", ..."EFG", "H");

// Array destructuring
// 1.
let populations = [10000, 20000, 30000];
let [small, medium, large] = populations;
console.log(small);
console.log(medium);
console.log(large);

// 2.
let populations_1 = [10000, 20000, 30000, [4000, 10000]];
let [small_1, medium_1, large_1, veryHight, max] = populations_1;
console.log(small_1);
console.log(medium_1);
console.log(large_1);
console.log(veryHight);
console.log(max);

//3)-------------------------------------------

let populations_2 = [10000, 20000, 30000, [4000, 10000]];
let [small_2, medium_2, large_2, [veryHight_2, max_2]] = populations_2;
console.log(small_2); //10000
console.log(medium_2); //20000
console.log(large_2); //30000
console.log(veryHight_2); //4000
console.log(max_2); //10000

// object destructuring

let category = {
  id: 1,
  first_name: "Beverage",
};

let { id, first_name } = category;
console.log(id);
console.log(first_name);

const data = { a: 1, b: 2, c: 3 };
const { b, ...rest } = data;
console.log(b);
console.log(rest);

const data_1 = { a: 1, b: 2, c: 3 };
const removeProp = "b";
const { [removeProp]: remove_1, ...rest_1 } = data_1;
console.log(remove_1);
console.log(rest_1);
console.log(data_1);
