const inquirer = require('inquirer');
const { generateHTML } = require('./generateHTML');
const Employee = require('./employee');


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

module.exports = Manager;