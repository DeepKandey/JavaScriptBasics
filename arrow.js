// const sayHello = function (name) {
//     return "Hey, there " + name + " !"
// }

const sayHello = (name) => `Hey, there ${name} !`

console.log(sayHello("Deepak"))

const todos = [
    {
        isDone: false,
    },
    {
        isDone: true,
    },
    {
        isDone: false,
    }]

// filter example calling callback function or functional interface in Java
const filterValues = todos.filter((todo) => todo.isDone == true)

console.log(filterValues);