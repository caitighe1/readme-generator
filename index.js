var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'input_type',
        message: 'What is your name?',
        default: 'Caitlin',
    },
    {
        type: 'list',
        name: 'list question',
        message: 'What programming language do you like?',
        choices:['Javascript', 'C++', 'Java', 'Python'],
        default: 'Javascript'
    },
    {
        type: 'checkbox',
        name: 'checkbox question',
        message: 'What borough do you live in?',
        choices:['Queens', 'Brooklyn', 'Bronx', 'Manhattan'],
        default: 'Queens'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github name?',
        default: 'caitighe1'
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  