const inquirer = require('inquirer');
const {Employee, promptForEmployee} = require('./employee');

// creating class Manager which extends class Employee and added parameter officeNum

class Manager extends Employee{
    constructor(name, email, id, role, officeNum){
        super(name, email, id, role);
        this.officeNum = officeNum;
    }
    getRole(){
        return this.role;
    }
    getOfficeNum(){
        return this.officeNum;
    }
}

// prompt for added parameter officeNum

function promptForManager(){
    return inquirer.prompt([
        {name: 'officeNum',
        message: 'What is their Office Number?',
        type: 'input',},
    ])
}

module.exports = {
    Manager,
    promptForManager
}