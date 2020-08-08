let num = [1, 2, 3, 4, 5, 6]
console.log(num)
console.log('--------')

// remove element from End
const last = num.pop()
console.log(num)
console.log("element removed from the last:  " + last)
console.log('--------')

// remove element from first
const first = num.shift()
console.log(num)
console.log("element removed from the beginning: " + first)
console.log('--------')

// remove from middle
num.splice(1, 1)
console.log("Array after removing elements from the given index and number of elements to be removed: " + num)
console.log('--------')

// empty array
num = []
console.log(num)
console.log('--------')

num = [1, 2, 3, 4, 5, 6]
console.log(num)
num.length = 0  // making array length 0
console.log("empty array by making its length 0:  " + num)
console.log('--------')

// using splice
num = [1, 2, 3, 4, 5, 6]
num.splice(0, num.length)
console.log("empty array using splice:   " + num)
console.log('--------')

// The slice() method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.
num = [1, 2, 3, 4, 5, 6]
let newArray = num.slice(0, 3);   // Return value is also an array
console.log("new array from existing aaray using slice:   " + newArray);
console.log(newArray);

// Slice ( )
// Copies elements from an array
// Returns them as a new array
// Doesn’t change the original array
// Starts slicing from … until given index: array.slice (from, until)
// Slice doesn’t include “until” index parameter
// Can be used both for arrays and strings

// Splice ( )
// Used for adding/removing elements from array
// Returns an array of removed elements
// Changes the array
// For adding elements: array.splice (index, number of elements, element)
// For removing elements: array.splice (index, number of elements)
// Can only be used for arrays

// Split ( )
// Divides a string into substrings
// Returns them in an array
// Takes 2 parameters, both are optional: string.split(separator, limit)
// Doesn’t change the original string
// Can only be used for strings