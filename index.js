const inquirer = require('inquirer'); //require is used to include built in modules in js.
const fs = require('fs'); //fs module to access filesystem
const generateMarkdown = require('./utils/generateMarkdown'); //path module in node that works with files and directories

/* questions */
const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub handle?',
        default: 'caitighe1',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
        default: 'caitighe@gmail.com',
    },
    {
        type: 'input',
        name: 'projectTitle',
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
        message: 'testInstructions',
        default: 'tests will be included in the demo, open npm start in integrated terminal and follow the prompts'
    },
    {
        type: 'list',
        name: 'license',
        message: "which License are you using?",
        choices: ['MIT', 'ISC', 'Microsoft Public License']
    }
];
 /* */
  // TODO: Create a function to initialize app // writeFile asynchronously The first parameter is file name and second is text data and 
  //third is callback to handle errors..promise using the -then handles errors locally without handling them in the function as well.
function init() {
    console.log('Please enjoy your README generator journey');
    inquirer
        .prompt(questions)
        .then(function(response) {
            const newFileName = 'README2.md';
            const generatedReadMe = generateMarkdown(response)
            fs.writeFileSync(newFileName, generateMarkdown(response), function(err) { //writes data to a file
                if (err) {
                    return console.log(err);
                }
                console.log('Congrats! You have just created a readme')
            });
            
        });
    }
// Function call to initialize app
init();