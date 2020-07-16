const num = [3, 4, 7, 6]
console.log(num)
console.log(num[0])
console.log(num.length)
console.log(num.indexOf(3))
console.log(`Length of the array: ${num.length}`)
console.log('-------')

// add element to the end
num.push(5)
console.log(num)
console.log('-------')

// add element at the beginning 
num.unshift(1, 2)
console.log(num)
console.log('-------')

// remove element at the beginning
console.log("Number getting deleted from the beginning ", num.shift())
console.log(num)
console.log('-------')

// remove element at the end
console.log("Number getting deleted from the end ", num.pop())
console.log(num)
console.log('-------')


// add at middle
num.splice(2, 0, 'a', 'b')
console.log(num)
console.log('-------')
console.log(num.indexOf(5, num.indexOf(1) + 1))
console.log('-------')

// Array having ref type (Objects)
const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]

const c1 = courses.find(function (course) { return course.name === 'b' })
console.log(c1)
console.log('-------')

const c2 = courses.find(course => course.name === 'b')
console.log(c2)
console.log('-------')

const c3 = courses.findIndex(function (course) { return course.name === 'b' })
console.log(c3)
