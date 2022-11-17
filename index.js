const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>
  <body>
      <header>
          <h1>My Team</h1>
      </header>
      <main>
          <section class="card">
              <h2>Manager</h2>
              <ul>
                  <li>Name: ${answers.managerName}</li>
                  <li>ID: ${answers.managerId}</li>
                  <li>Email: ${answers.managerEmail}</li>
                  <li>Office Number: ${answers.managerOfficeNumber}</li>
              </ul>
          </section>
          <section class="card">
              <h2>Engineer</h2>
              <ul>
                  <li>Name: ${answers.engineerName}</li>
                  <li>ID: ${answers.engineerId}</li>
                  <li>Email: ${answers.engineerEmail}</li>
                  <li>GitHub: ${answers.engineerGithub}</li>
              </ul>
          </section>
          <section class="card">
              <h2>Intern</h2>
              <ul>
                  <li>Name: ${answers.internName}</li>
                  <li>ID: ${answers.internId}</li>
                  <li>Email: ${answers.internEmail}</li>
                  <li>School: ${answers.internSchool}</li>
              </ul>
          </section>
      </main>
  </body>
  </html>`;

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
        name: 'engineerGithub'
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
  .then((answers) => writeFile('index.html', generateHTML(answers))
  .catch((err) => console.error(err)));