const inquirer = require('inquirer');
const {Employee, promptForEmployee} = require('./employee');

class Engineer extends Employee{
    constructor(name, email, id, role, github){
        super(name, email, id, role);
        this.github = github;
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
}

function promptForEngineer(){
    return inquirer.prompt([
        {name: 'github',
        message: 'What is their GitHub username?',
        type: 'input',},
    ])
}

module.exports = {
    Engineer,
    promptForEngineer
}