console.log(3 + 4, "hello", true);
console.log('***************************')

let password = 'kitty';

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password")
    } else {
        console.log("Password is long enough, but cannot contain spaces");
    }
} else {
    console.log("Password must be longer");
}
console.log('***************************')

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only knows',
    'A Day In The Life',
    'Life On Mars'
];

let arrayLength = topSongs.push('Fortunate Son'); // add at the end
console.log('Array length after push: ' + arrayLength);

let lastElement = topSongs.pop(); // remove from the end
console.log('Array length after pop: ' + topSongs.length);

console.log('***************************')

const firstInteger = 4;
const secondInteger = '5.8';
console.log(firstInteger + parseInt(secondInteger, 10));
console.log(firstInteger + parseFloat(secondInteger));
console.log(firstInteger + Number(secondInteger));
console.log('***************************')

let nestArray = [
    ['leg', 'hand'],
    ['boy', 'girl']
]

console.log('NestedArray Value element', nestArray[0][1]);
console.log('***************************')

const fitBitData = {
    totalSteps: '308727',
    totalMiles: '211.7',
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}

console.log(fitBitData);
console.log("avgCalorieBurn: " + fitBitData.avgCalorieBurn)

fitBitData.addProperty = '67FG';
console.log("Added Properties: " + fitBitData.addProperty);

fitBitData['avgGoodSleep'] = '3:13';
console.log("Updated Properties: " + fitBitData.avgGoodSleep);
console.log('***************************')

const movieReviews = {
    Arrival: 9.5,
    Alien: 9
}

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}

// for (let movie of movieReviews) {
//     console.log(movie, movieReviews[movie]);
// }

for (const key in movieReviews) {
    if (Object.hasOwnProperty.call(movieReviews, key)) {
        const element = movieReviews[key];
        console.log(`${key} : ${element}`);

    }
}
console.log('***************************')

function factorial(number) {
    let fact = 1;

    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(4));
console.log('***************************')

const vowels = ['a', 'e', 'i', 'o', 'u'];
let input = 'javascriptloops';

for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
        console.log((input[i]));
    }
}

for (let i = 0; i < input.length; i++) {
    if (!vowels.includes(input[i])) {
        console.log((input[i]));
    }
}

console.log('***************************')

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;

    }

    return letter;
}

console.log(getLetter('adfgt'));
console.log('***************************')


function getSecondLargest(nums) {
    // Complete the function
    const sortedArray = nums.sort(function (a, b) { return b - a });
    const uniqueSet = new Set(sortedArray);
    const uniqueArray = [...uniqueSet];
    console.log(uniqueArray);
    return uniqueArray[1];
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));
console.log('***************************')

function reverseString(s) {
    try {
        console.log(s.split("").reverse().join(""));
    } catch (err) {
        console.log("s.split is not a function" + "\n" + s);
    }

}

reverseString('(1234)');
console.log('***************************')

function isPositive(a) {
    if (a === 0) {
        throw Error("Zero Error");
    }
    if (a < 0) {
        throw Error("Negative Error");
    }
    return "YES";
}

console.log(isPositive(7));
console.log('***************************')

function Rectangle(a, b) {
    return Object = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
}

console.log(Rectangle(4, 5));
console.log('***************************')

function getCount(objects) {
    let countOfObjects = 0;

    objects.forEach(element => {
        if (element.x === element.y) {
            countOfObjects++;
        }
        console.log(`${element.x} ${element.y}`); // 100, 200, 300
    }
    );
    return countOfObjects;
}

const myArray = [{ x: 100, y: 100 }, { x: 200, y: 200 }, { x: 300, y: 100 }];
console.log(getCount(myArray));
console.log('***************************')

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

const tripleNumbers = numbers.map(element => element * 3);
console.log(tripleNumbers);

for (const iterator of tripleNumbers) {
    console.log(iterator);
}

const numDetail = tripleNumbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
})

console.log(numDetail);
console.log("******************");

const words = ['asap', 'byob', 'rsvp', 'diy'];
const upperCaseWordsWithDotSepearation = words.map(element => element.toUpperCase().split('').join('.'));
console.log(upperCaseWordsWithDotSepearation);
console.log("*******************");

let movies = ['The Fantastic Mr.Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds'];

let movie = movies.find(movie => movie.includes('Mrs.'));
console.log(movie);

let movie2 = movies.find(m => m.indexOf('Mrs.') === 0);
console.log(movie2);
console.log("*******************");

const nums = [34, 23, 45, 24, 46, 66, 99];
const evenArray = nums.filter(n => n % 2 === 0);
console.log(evenArray);
console.log("*******************");

const words1 = ["dog", "dig", "log", "bag", "wag"];
console.log("All words have length > 3: " + words1.every(word => word.length > 3));
console.log("All words end with g : " + words1.every(word => {
    return word[word.length - 1] === 'g'
}));
console.log("*******************");

const words2 = ["dog", "dig", "log", "baged", "wag"];
console.log("Any of the words has length > 3: " + words2.some(word => word.length > 3));
console.log("Any of the words ends with g : " + words2.some(word => {
    return word[word.length - 1] === 'g'
}));
console.log("*******************");

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
console.log("Sort() by default first converts to String and then sort: " + prices.sort());
console.log("Descending Order: " + prices.slice().sort((a, b) => b - a));
console.log("Ascending Order: " + prices.slice().sort((a, b) => a - b));
console.log("*******************");

const reducedValueOnAddition = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('ReducedValueOnAddition: ', reducedValueOnAddition);

const reducedValueOnMultiplication = prices.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('ReducedValueOnMultiplication: ', reducedValueOnMultiplication);

const reducedValueOnMax = prices.reduce((max, currValue) => Math.max(max, currValue));
console.log('ReducedValueOnMaximum: ', reducedValueOnMax)

const reducedValueOnMin = prices.reduce((min, currValue) => Math.min(min, currValue));
console.log('ReducedValueOnMinimum: ', reducedValueOnMin)

const reducedValueOnMinWithInitial = prices.reduce((min, currValue) => Math.min(min, currValue), 10);
console.log('ReducedValueOnMinimumWithInitialValue: ', reducedValueOnMinWithInitial)
console.log("*******************");

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {})
console.log(results);
console.log("*******************");

class Polygon {

    constructor(arrayOfLengths = []) {
        this.arrayOfLengths = arrayOfLengths;
    }

    perimeter() {
        return (this.arrayOfLengths || []).reduce((a, b) => a + b, 0);
    }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

// Print the perimeter
console.log(triangle.perimeter());
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
console.log("*******************");

//spread ...
const catDog = {
    legs: 3,
    hand: 4
};

const random = [...'hello', {
    ...catDog
}];

console.log(random);
console.log("*******************");

// arguments
function mysum() {
    console.log(arguments);
}
mysum(1, 2, 3, 'd', 'g');
console.log("*******************");

// Rest parameters     Rest Vs Spread
function mySum1(...params) {
    console.log(params);
}
mySum1(4, 5, 6, 7);
console.log("*******************");

// destructuring Arrays
const raceResults = [
    'Eluid Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Alphonce Simbu',
    'Jared Ward'
]

const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze);
console.log("*******************");

function getMaxLessThanK(n, k) {
    let max_value = 0;

    for (let i = 1; i < n; i++) {
        for (let index = i + 1; index <= n; index++) {
            let currentValue = i & index;

            (currentValue < k && currentValue > max_value) && (max_value = currentValue);
        }
    }
    return max_value;
}

console.log('Max bitwise AND value less than 2: ' + getMaxLessThanK(5, 2));
console.log('Max bitwise AND value less than 5: ' + getMaxLessThanK(8, 5));
console.log('Max bitwise AND value less than 2: ' + getMaxLessThanK(2, 2));
console.log('Max bitwise AND value less than 2: ' + getMaxLessThanK(9, 2));
console.log('Max bitwise AND value less than 3: ' + getMaxLessThanK(8, 3));

console.log("*******************");

function sides(literals, ...expressions) {
    const [a, p] = expressions;
    const value = Math.sqrt(Math.pow(p, 2) - 16 * a);
    s1 = (p + value) / 4;
    s2 = (p - value) / 4;
    const sidesArray = [s1, s2].sort(function (a, b) { return a - b });
    console.log(sidesArray);

}
[s1, s2] = [7, 4];
sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log("*******************");

function regexVarForVowel() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    let re = /^(a|e|i|o|u).*\1$/;

    /*
     * Do not remove the return statement
     */
    return re;
}

console.log(`String matches the pattern? ${regexVarForVowel().test('aeioutap')}`);
console.log("*******************");

function getDayName(dateString) {
    let dayName;
    // Write your code here
    console.log(`Dayname by localeDateString(): ${new Date(dateString).toLocaleDateString('en-us', { weekday: 'long' })}`)

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = days[new Date(dateString).getDay()];
    return dayName;
}
console.log(`Dayname by getDay(): ${getDayName('10/11/2009')}`);
console.log("*******************");

function regexVarForInitials() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /^(Mr|Mrs|Ms|Dr|Er)\.[A-Za-z]+$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}

console.log(!!'Mrs.Y'.match(regexVarForInitials()));
console.log("*******************");

function regexVarForNumberOccurence() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /\d+/g
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const r = '102, 1948948 and 1.3 and 4.5'.match(regexVarForNumberOccurence());
console.log("Occurence of numbers as below: ")
for (const e of r) {
    console.log(e);
}