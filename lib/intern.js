const inquirer = require('inquirer');
const {Employee, promptForEmployee} = require('./employee');

// creating class Intern which extends class Employee and added parameter school

class Intern extends Employee{
    constructor(name, email, id, role, school){
        super(name, email, id, role);
        this.school = school;
    }
    getRole(){
        return this.role;
    }
    getSchool(){
        return this.school;
    }
}

// prompt for added parameter school

function promptForIntern(){
    return inquirer.prompt([
        {name: 'school',
        message: 'What school are they going to?',
        type: 'input',},
    ])
}

module.exports = {
    Intern,
    promptForIntern
}