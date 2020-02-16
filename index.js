const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

const manager = require("./manager");

// const writeFileAsync = util.promisify(fs.writeFile);

// const manager = require("./manager")

var teamMembers = {
  manager: null,  //There can be only one
  engineers: [],
  interns: []
}

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
          if (teamMembers.engineer === null) {
            addEngineer();
          } else {
            console.log("Your team already has an engineer. You cannot add another");
            promptUser();
          }
        break;
      case "Add an intern":
          console.log("Adding an intern...");
          //Call the add intern function
          if (teamMembers.intern === null) {
            addIntern();
          } else {
            console.log("Your team already has an intern. You cannot add another");
            promptUser();
          }
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
      message: "What is the manager's title?",
      name: "managerTitle"
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
    let aManager = new manager(response.managerOfficeNumber, response.managerId, response.managerName, response.managerTitle, response.managerEmail);
    console.log(aManager);
    teamMembers.manager = aManager;
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
      message: "What is the engineer's title?",
      name: "engineerTitle"
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "What is the engineer's github?",
      name: "gihub"
    }
  ]).then(response => {
    // console.log(response);
    //Create a manager insance using new Mananger
    let aEngineer = new engineer(response.engineerName, response.engineerId, response.engineerTitle, response.gihub, response.engineerEmail);
    console.log(aEngineer);
    teamMembers.engineer = aEngineer;
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
      message: "What is the intern's title?",
      name: "internTitle"
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
    let aIntern = new intern(response.internName, response.internId, response.internTitle, response.internEmail, response.internSchool);
    console.log(aIntern);
    teamMembers.intern = aIntern;
    promptUser();
  })
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
  
