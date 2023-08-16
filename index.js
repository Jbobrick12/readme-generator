// Making sure to include inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
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
    }
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:"
    }
    {
        type: "input",
        name: "credits",
        message: "Please provide any collaborators or third-party assets used:"
    }
    {
        type: "input",
        name: "license",
        message: "Please provide the license associated with your project:"
    }
    // add more questions here
];