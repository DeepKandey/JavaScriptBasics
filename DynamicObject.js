const circle = {
                 radius: 1,
                 color: 'red',
                 log() {
                         console.log('log', this.radius)  }
}

// add more properties in object
circle.price = 100;
circle.draw = function () { }

console.log(circle);

// delete properties
delete circle.price;

console.log("After deleting price property");
console.log(circle);
circle.log();