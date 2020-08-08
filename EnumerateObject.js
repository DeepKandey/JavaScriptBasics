const square = {
    radius: 1,
    draw() {
        console.log("Log");
    }
}

// for in
console.log('---for in------');
for (let key in square) {
    console.log(key, square[key]);
}

// for of
console.log('---for of------');
for (let key of Object.keys(square)) {
    console.log(key);
}

// Entry
console.log('---Entry------');
for (let entry of Object.entries(square)) {
    console.log(entry);
}

// if in
console.log('---If in------');
if ('radius' in square) {
    console.log('Yes');
}