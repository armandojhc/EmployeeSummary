const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

const manager = require("./lib/manager");
const intern = require("./lib/intern");
const engineer = require("./lib/engineer");

// const writeFileAsync = util.promisify(fs.writeFile);

// const manager = require("./manager")

var teamMembers = {
  manager: null,  //There can be only one
  engineers: [],
  interns: []
}

// var teamMembers = {
//   manager: new manager(23, 45, "Armando", "Lead Dev", "rdd@rtetr.com"),  //There can be only one
//   engineers: [new engineer("rdear4", 234, "Ron", "rdef@kent.edu"), new engineer("armandojhc", 12, "Armando 2", "Other Dev", "dfg@lejr.com")],
//   interns: [new intern("John", "GW", 87, , "Intern 1", "asdfgh@lko.com"), new intern("MIT", 11, "David", "Intern 2", "34567dfgh@lko.com")]
// }

function promptUser() {
    inquirer.prompt([
    {
      type: "list",
      name: "selectedOption",
      message: "What would you like to do?",
      choices: ["Add a manager", "Add an engineer", "Add an intern", "Quit"]
    }
  ])
  .then(response => {
    switch (response.selectedOption) {
      case "Add a manager":
        console.log("Adding manager...");
        if (teamMembers.manager === null) {
          addManager();
        } else {
          console.log("Your team already has a manager. You cannot add another");
          promptUser();
        }
        break;
      case "Add an engineer":
        console.log("Adding an engineer...");
          //Call the addEngineer function
         
            addEngineer();
          
        break;
      case "Add an intern":
          console.log("Adding an intern...");
          //Call the add intern function
            addIntern();
        break;

// function promptUser() {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "managerName",
//       message: "What is your manager's name?"
//     },
//     {
//       type: "input",
//       name: "managerID",
//       message: "What is your manager's ID?"
//     },
//     {
//       type: "input",
//       name: "managerEmail",
//       message: "What is your manager's email?"
//     },
//     {
//       type: "input",
//       name: "managerOffice",
//       message: "What is your manager's office??"
//     }
    // {
    //   type: "list",
    //   name: "teamMember",
    //   message: "What type of team memeber would you like to add?",
    //   choices: ["Engineer" , "Intern" , "I don't want to add any more team"]
    // },

    
    // {
    //   type: "input",
    //   name: "linkedin",
    //   message: "Enter your LinkedIn URL."
    // }
//   ]);
    case "Quit":
      console.log("Building Team profile...");
      //Use the teamMembers Object to build the team roster HTML file
      //Then quit.
      let teamProfileHTML = createHTML();

      fs.writeFile("teamProfile.html", teamProfileHTML, function(err) {
        if (err) {
          console.log("There was an error writing you html to a file");
          console.log(err);
        } else {
          console.log("Write successful");
        }
      });
        
      console.log("Quitting...");
      break;
    
  
  }

});
  
}

function addManager() {
  console.log("Lets add a manager");
  inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "managerName"
    },
    {
      type: "input",
      message: "What is the manager's id?",
      name: "managerId"
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "managerOfficeNumber"
    }
  ]).then(response => {
    // console.log(response);
    //Create a manager insance using new Mananger
    let aManager = new manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
    //console.log(aManager);
    teamMembers.manager = aManager;
    console.log(teamMembers);
    promptUser();
  })
}

function addEngineer() {
  console.log("Lets add an Engineer");
  inquirer.prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineerName"
    },
    {
      type: "input",
      message: "What is the engineer's id?",
      name: "engineerId"
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "What is the engineer's github?",
      name: "github"
    }
  ]).then(response => {
    // console.log(response);
    //Create a manager insance using new Mananger
    let aEngineer = new engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
    
    teamMembers.engineers.push(aEngineer);
    
    promptUser();
  })
}

function addIntern() {
  console.log("Lets add an Intern");
  inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "internName"
    },
    {
      type: "input",
      message: "What is the intern's id?",
      name: "internId"
    },
    {
      type: "input",
      message: "What is the inter's email?",
      name: "internEmail"
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "internSchool"
    }
  ]).then(response => {
    // console.log(response);
    //Create a manager insance using new Mananger
    let aIntern = new intern(response.internName, response.internId, response.internEmail, response.internSchool);
    
    teamMembers.interns.push(aIntern);
    
    promptUser();
  })
}

function createHTML() {

  //Create the engineers string
  let engineers = "";
  let interns = "";
  // console.log(teamMembers.engineers[0].generateHTML());
  for (let anEngineer of teamMembers.engineers) {
    let htmlString = anEngineer.generateHTML();

    engineers += htmlString;
  }

  //Create the interns string
  for (let anIntern of teamMembers.interns) {
    let htmlString = anIntern.generateHTML();

    interns += htmlString;
  }

  let teamHTMLTemplateString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>manager</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron">
        <h1 style="text-align: center;"> My Team</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="card" style="width: 18rem; float: left;">
          <div class="card-body">
            <h5 class="card-title">Name: ${teamMembers.manager.name}</h5>
            <img src="https://img.icons8.com/ios-filled/48/000000/cafe.png">
            <h6 class="card-text">Manager</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${teamMembers.manager.id}</li>
            <li class="list-group-item">Email: ${teamMembers.manager.email}</li>
            <li class="list-group-item">Office number: ${teamMembers.manager.officeNumber}</li>
          </ul>
        </div>
      </div>
      <div class="row" style="margin-top:20px">
        ${engineers}
      </div>
      <div class="row" style="margin-top:20px">
        ${interns}
      </div>
        
    
    </div>
    <a href="https://icons8.com/icon/37302/cafe" style="position: relative; margin-left: 500px;">Icons8</a>
    
</body>
</html>`

return teamHTMLTemplateString;

}

// function Answers (name , id , email, office) {
//   this.managerName = name;
//   this.managerID = id;
//   this.managerEmail = email;
//   this.managerOffice = office;
// };

// const manager = new Manager (Answers.managerName, Answers.managerID, Answers.managerEmail, Answers.managerOffice);

// fs.readFile("./managerTemplate.html", (err, data) => {
//     if (err) throw err;
//     const managerHtml = data;
//     //create dynamic html
//     managerHtml.replace("{{managerName}}", manager.name);
//     managerHtml.replace("{{managerID}}", manager.id);
//     managerHtml.replace("{{managerEmail}}", manager.email);
//     managerHtml.replace("{{managerOffice}}", manager.officeNumber);
// });

promptUser()
  // // .then(function(response) {


  //   // const html = generateHTML(answers);
  //   const html = fs.readFile("./managerTemplate.html", (err, data) => {


  //   });

  //   return writeFileAsync("index.html", html);
  
