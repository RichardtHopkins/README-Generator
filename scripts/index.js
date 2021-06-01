const inquirer = require('inquirer');
const fs = require('fs');

 const questions = [
     {
         type: 'input',
         name: 'Description',
         message: 'Enter Your Description:'
     }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    return;
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data);
            writeToFile('./Readme.md', data);
        });
}

// Function call to initialize app
init();


