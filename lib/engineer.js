const Employee = require("./employee.js");

class Engineer extends Employee {

    constructor (name , id, email, github) {

        super(name, id, email, "");

        this.github = github
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github
    }

    generateHTML() {
        let HTMLTemplate = `<div class="card" style="width: 18rem; float: left;">
        <div class="card-body">
          <h5 class="card-title">Name: ${this.name}</h5>
          <img src="https://img.icons8.com/ios-glyphs/50/000000/glasses.png">
          <h6 class="card-text">${this.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: ${this.email}</li>
          <li class="list-group-item">Github: ${this.github}</li>
        </ul>
      </div>`

      return HTMLTemplate;
    }

}

module.exports = Engineer;