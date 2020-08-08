// 1.
let sayHello = function () {
    console.log("Hello sayHello");
}

sayHello();

// 2.
let adder = function (num1 = 9, num2 = 10) {
    return (num1 + num2)
}

console.log(adder(2, 3));
console.log('-----');
console.log(adder());