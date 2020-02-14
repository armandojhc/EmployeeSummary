const Employee = require("./employee.js");

class Intern extends Employee {

    constructor (school , id , name , title, email) {

        super (id , name , title , email);

        this.school = school 
    }
    getSchool () {
        return this.school 
    }

    getRole () {
        return "Intern"
    }
}

module.exports = Intern;