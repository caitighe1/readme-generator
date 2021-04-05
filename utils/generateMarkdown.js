
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]`;
      break;
    case "No License":
      licenseBadge = ``;
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSelection(license, userName) {
  switch (license) {
    case "MIT":
      licenseText = `

      Copyright 2021 ${userName}
      Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    break;
  case "No License":
    licenseText = `There is no license on this project.`;
    break;
  }
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //defining the answer object
  const { userName, userEmail, projectTitle, description, installation, usage, contributions, testInstructions, license } = data;

  const licenseBadge = renderLicenseBadge(license);
  const licenseText = renderLicenseSelection(license, userName);

  return `${licenseBadge}
  # ${data.projectTitle}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation) 
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Information](#createrInfo)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Information
[Email](mailto://${data.userEmail})
[GitHub](http://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;  //assigned generateMarkdown to the module.exports API property 
