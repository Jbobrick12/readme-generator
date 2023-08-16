// Making sure to include inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

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
    {
        type: "input",
        name: "license",
        message: "Please provide the license associated with your project:"
    },
])
.then((answers) => {
    fs.writeFile(
      "README.md",
      `## Description
      ${answers.description}

      ## Table of Contents
      - [Description](#description)
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
      ${answers.license}`,
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("README generated successfully!");
      }
    );
  })
  .catch((error) => {
    console.error(error);
  });
