const inquirer = require('inquirer');
const Employee = require('./employee');

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