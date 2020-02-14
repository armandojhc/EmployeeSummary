const Employee = require("./employee.js");

class Manager extends Employee {

    constructor(officeNumber, id, name, title, email) {

        super(id, name, title, email);

        this.officeNumber = officeNumber;
    
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;