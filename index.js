// Making sure to include inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
// Questions that the user will answer
inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:"
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide any collaborators or third-party assets used:"
    },
]) // Creating the README file and adding responses to it
.then((answers) => {
    fs.writeFile(
      "README.md",
      `## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
      
## Installation
${answers.installation}
      
## Usage
${answers.usage}
      
## Credits
${answers.credits}
      
## License
MIT License

Copyright (c) 2023 Justin Bobrick

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
SOFTWARE.`,
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("README generated successfully!");
      }
    );
  }) // Catching any errors
  .catch((error) => {
    console.error(error);
  });
