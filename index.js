const inquirer = require('inquirer');
/* created file system to read files from computer */
const fs = require('fs');

/* to convert to HTML */
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt([
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
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  