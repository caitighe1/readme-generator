const inquirer = require('inquirer');
/* file share */
const util = require('util');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

/* callback to promise based method */
const writeFileAsync = util.promisify(fs.writeFile);




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
        name: 'licenseList',
        message: "which License are you using?",
        choices: ['MIT', 'ISC', 'Microsoft Public License']
    }
];
// TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`Your file ${fileName}`);
    });
}
  // TODO: Create a function to initialize app
function init() {
    console.log('Please enjoy your README generator journey');
    inquirer
        .prompt(questions)
        .then(data => {
            const compiledAnswers = generateMarkdown(data);
            newFileName = data.projectTitle + ".md";

            writeToFile(newFileName, compiledAnswers);
        });
    }
// Function call to initialize app
init();