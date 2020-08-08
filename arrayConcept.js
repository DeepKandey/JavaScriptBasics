const num = [3, 4, 7, 6] // Array declaration

console.log(num)
console.log(num[0]) // element at given index of the array
console.log(num.length) // length of the array
console.log(num.indexOf(3)) // index of given element of the array
console.log(`Length of the array: ${num.length}`) // Print array lenght using literals
console.log('-------')

num.push(5) // add element to the end
console.log(num)
console.log('-------')

console.log("Number getting deleted from the end ", num.pop())// remove element at the end
console.log(num)
console.log('-------')

console.log("Number getting deleted from the beginning ", num.shift()) // remove first element of the arrays and returns it
console.log(num)
console.log('-------')

num.unshift(1, 2) // add new elements at the start of the array
console.log(`After adding element at the beggining ${num}`);
console.log('-------')

num.splice(2, 0, 'a', 'b') // delete and add at middle( start index, delete count)
console.log(`After adding element in the middle ${num}`);
console.log('-------')
console.log(num.indexOf(5, num.indexOf(1) + 1))
console.log('-------')

const courses = [ { id: 1, name: 'a' }, 
                  { id: 2, name: 'b' }] // Array having ref type (Objects)

const c1 = courses.find(
                        function (course) 
                                   { return course.name === 'b' } )  // find element using find() and Predicate
console.log(c1)
console.log('-------')

const c2 = courses.find(
                        course => course.name === 'b')  // find element using find() and arrow function
console.log(c2)
console.log('-------')

const c3 = courses.findIndex(
                              function (course) 
                                         { return course.name === 'b' }) // find index of element using find() and predicate
console.log(c3);