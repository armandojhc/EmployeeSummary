const Employee = require("./employee.js");

class Intern extends Employee {

    constructor (name , id, email, school) {

        super (name, id , email , "");

        this.school = school 
    }
    getSchool () {
        return this.school 
    }

    getRole () {
        return "Intern"
    }

    generateHTML() {
        let HTMLTemplate = `<div class="card" style="width: 18rem; float: left;">
        <div class="card-body">
          <h5 class="card-title">Name: ${this.name}</h5>
          <img src="https://img.icons8.com/ios-glyphs/50/000000/student-male.png">
          <h6 class="card-text">${this.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: ${this.email}</li>
          <li class="list-group-item">School: ${this.school}</li>
        </ul>
      </div>`

      return HTMLTemplate;
    }
}

module.exports = Intern;