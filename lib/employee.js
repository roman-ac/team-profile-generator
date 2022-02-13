const inquirer = require('inquirer');
const { generateHTML } = require('./generateHTML');


class Employee{
    constructor(name, email, id, role){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
    getRole(){
        return this.role;
    }
}

function promptForEmployee(){
    return inquirer.prompt([
        {name: 'role',
        message: 'What type of employee are we submitting?',
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"]},
        {name: 'name',
        message: 'What is their name?',
        type: 'input',},
        {name: 'email',
        message: 'What is their email?',
        type: 'input',},
        {name: 'id',
        message: 'What is their employee ID?',
        type: 'input',},
    ])
}


module.exports = {
    Employee,
    promptForEmployee,
}