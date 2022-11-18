const Employee = require('./employee');

class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        let role = "Manager"
        return role;
    }
}

module.exports = Manager;