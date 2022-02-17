// define own method
String.prototype.myMethod = function () {
    console.log(`${this.toUpperCase()}!!! Hey, I have defined my own method`)
}

// overriding existing method
Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!!!'
}