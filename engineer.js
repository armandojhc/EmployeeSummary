const Employee = require("./employee.js");

class Engineer extends Employee {

    constructor (github , id , name , title, email) {

        super(id , name , title, email);

        this.github = github
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer;