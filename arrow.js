// const sayHello = function (name) {
//     return "Hey, there " + name + " !"
// }

const sayHello = (name) => `Hey, there ${name} !` // define function using arrow function

console.log(sayHello("Deepak"))  // function call

const todos = [
                 { isDone: false },
                 { isDone: true },
                 { isDone: false }
              ]

const filterValues = todos.filter((todo) => todo.isDone == true) // filter example calling callback function or functional interface in Java

console.log(filterValues);