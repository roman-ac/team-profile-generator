const inquirer = require('inquirer');
const {Employee, promptForEmployee} = require('./employee');


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