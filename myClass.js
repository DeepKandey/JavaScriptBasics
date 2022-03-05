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


// Inheritance
class Teacher extends User {
    constructor(firstName, lastName, credit, subject) {
        super(firstName, lastName, credit);
        this.subject = subject;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}.`
    }
}

//const john = new User('John', 'Anderson', 34);
const john = new Teacher('John', 'Anderson', 34,'python');
console.log(john);

console.log(john.getFullName());

john.editName('Johny Anderson');
console.log(john.getFullName());

const sammy = new User();
console.log(sammy);
