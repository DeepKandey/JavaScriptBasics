console.log("----------Normal Object Creation-----------");
const circle1 = {
    radius: 1,
    isVisible: true,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw function")
    }
}

console.log(circle1);

console.log("\n----------Factory Function object creation-----------");

function createCircle(radius) {
    return {
        radius: radius,
        draw() {
            console.lo("draw function using factory function");
        }
    }
}

const c1 = createCircle(1);
console.log(c1);

console.log("\n----------Constructor Function-----------");

function CreateCircles(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw function using constructor function")
    }
}

const c2 = new CreateCircles(2)
console.log(c2)