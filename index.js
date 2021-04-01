var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'input_type',
        message: 'What is your name?',
        default: 'Caitlin'
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });