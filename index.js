const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// const manager = require("./manager")

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?"
    },
    {
      type: "input",
      name: "managerID",
      message: "What is your manager's ID?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?"
    },
    {
      type: "input",
      name: "managerOffice",
      message: "What is your manager's office??"
    }
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
  ]);

  
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
  .then(function(answers) {


    // const html = generateHTML(answers);
    const html = fs.readFile("./managerTemplate.html", (err, data));

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });