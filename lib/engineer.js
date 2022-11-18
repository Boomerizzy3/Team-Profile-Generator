const Employee = require('./employee');

class Engineer extends Employee {
    constructor (id, github) {
        super(id)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        let role = "Engineer"
        return role;
    }
}

const jeff = new Engineer

console.log(jeff.getRole());

module.exports = Engineer;