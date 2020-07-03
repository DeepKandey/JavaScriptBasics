let nameArr = ['Modi', 'Deepak', 'Akansha']

console.log("------- for - in ---------")

for (let key in nameArr) {
    console.log(key + " " + nameArr[key])
}

console.log("------- for - of ---------")

for (let key of nameArr) {
    console.log(key)
}