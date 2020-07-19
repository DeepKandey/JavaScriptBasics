class User {

    constructor(firstName, lastName, credit) {
        this.firstName = firstName
        this.lastName = lastName
        this.credits = credit
    }

    getFullName() {
        let fullName = `${this.firstName} ${this.lastName} is my full name.`
        return fullName;
    }

    editName(newName) {
        const myName = newName.split(' ')
        this.firstName = myName[0]
        this.lastName = myName[1]
    }
}

const john = new User('John', 'Anderson', 34);
const sammy = new User();

console.log(john);
console.log(john.getFullName());
john.editName('Johny Anderson');
console.log(john.getFullName());

console.log(sammy);