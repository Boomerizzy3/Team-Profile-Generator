const Employee = require('./employee');

class Intern extends Employee {
    constructor (officeNumber) {
        this.school = this.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        let role = "Intern"
        return role;
    }
}

module.exports = Intern;