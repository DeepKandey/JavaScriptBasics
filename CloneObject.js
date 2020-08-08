const cloneCircle = {
    radius: 1,
    draw() { console.log('draw'); }
}

//1. for in loop to clone object
const another = {};
for (let key in cloneCircle)
    another[key] = cloneCircle[key];

console.log(another);

//2. Using Object.assign method to clone object using empty object{}
const another1 = Object.assign({}, cloneCircle);
console.log(another1);

const another2 = Object.assign({ price: 1000 }, cloneCircle); // can add extra properties while cloning object
console.log(another2);

//3. spread ... operator
const another3 = { ...cloneCircle };
console.log(another3);