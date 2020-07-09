let num = [1, 2, 3, 4, 5, 6]
console.log(num)
console.log('--------')

// remove element from End
const last = num.pop()
console.log(num)
console.log(last)
console.log('--------')

// remove element from first
const first = num.shift()
console.log(num)
console.log(first)
console.log('--------')

// remove from middle
num.splice(1, 1)
console.log(num)
console.log('--------')

// empty array
num = []
console.log(num)
console.log('--------')

num = [1, 2, 3, 4, 5, 6]
console.log(num)
num.length = 0  // making array length 0
console.log(num)
console.log('--------')

// using splice
num = [1, 2, 3, 4, 5, 6]
num.splice(0, num.length)
console.log(num)
console.log('--------')
