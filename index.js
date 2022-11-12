const inquirer = require('inquirer');
const menu = require('inquirer-menu');

inquirer
  .prompt([
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the the team manager's employee ID",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the the team manager's email address?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the the team manager's office number?",
        name: 'managerOfficeNumber'
    },
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the the engineer's employee ID",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is the the team engineer's email address?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the the engineers' GitHub username?",
        name: 'engineerGitHub'
    },
    {
        type: 'input',
        message: "What is the team interns name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the the intern's employee ID",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is the the intern's email address?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is the the intern's school?",
        name: 'internSchool'
    }
  ])
  .then((response) => 
    console.log(response)
  );