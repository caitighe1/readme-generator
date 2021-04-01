var inquirer = require('inquirer');
inquirer
  .prompt([
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
        name: 'installation',
        message: 'What are the installation requirements?',
        default: 'Just go on [official Node.js website](https://nodejs.org/) and download the installer. Also, be sure to have `git` available in your PATH',
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  