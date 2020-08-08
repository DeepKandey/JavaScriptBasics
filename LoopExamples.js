let nameArr = ['Modi', 'Deepak', 'Akansha']

console.log("------- for - in ---------")
for (let key in nameArr) {
    console.log(key + " " + nameArr[key])
}

console.log("------- for - of ---------")
for (let key of nameArr) {
    console.log(key)
}

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

console.log('-----for loop---')
for (let index = 0; index < days.length; index++) {
    console.log(days[index])
}

console.log('----for each using callback function----')
days.forEach(function (day) {
    console.log(day)
})

console.log('--------')
days.forEach((day, index) => console.log(`starts with ${index + 1} -- ${day}`))