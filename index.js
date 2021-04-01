const inquirer = require('inquirer');
/* file share */

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


/* questions */

const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: 'Caitlin',
    },
    {
        type: 'input',
        name: 'project title',
        message: 'What is the title of your project?',
        default: 'caitlins-readme-generator'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project in a couple of words',
        default: 'Creating a command-line application that dynamically generates a professional README.md file from a users input using inquirer'
    },
    {
        type: 'input',
        name: 'installation and prerequisites',
        message: 'What are the prerequisites and installation requirements?',
        default: 'Make sure you have node installed and then run npm i inquirer',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage',
        default: 'var inquirer = require(\inquirer\) see examples'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who has contributed to this project?',
        default: 'Myself, Programming with Mosh, Jonathan Gardner, Robert Han, Andrew Finkernagel'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions',
        default: 'tests will be included in the demo, open npm start in integrated terminal and follow the prompts'
    },
    {
        type: 'list',
        name: 'License list',
        message: "which License are you using?",
        choices: ['MIT', 'ISC', 'Microsoft Public License']
    },
  ];
  // TODO: Create a function to write README file
  
  function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, 'utf-8', (err) => {
          if(err) throw err;
          console.log('we did it!');
      });
  }

  // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then( (response) => {
            console.log(response);
            writeToFile("README.md", generateMarkdown(response));
        });
}
 
  