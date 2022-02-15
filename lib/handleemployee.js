const inquirer = require('inquirer');
const {Employee, promptForEmployee} = require('./employee')
const {Engineer, promptForEngineer} = require('./engineer')
const {Manager, promptForManager} = require('./manager')
const {Intern, promptForIntern} = require('./intern')
const {generateManagers, generateEngineers, generateInterns, generateHTML} = require('../src/generatehtml')

// creating empty arrays to store employees data

let managersArr = [];
let engineersArr = [];
let internsArr = [];

// prompt for checking if its the last employee

function lastEmployee(){
    return inquirer.prompt([
        {name: 'lastEntry',
        message: 'Will this be your last employee entry?',
        type: 'list',
        choices: ["No", "Yes"]},
    ])
}

// async function to handle user input

async function handleEmployee(){
    let employeePrompt = await promptForEmployee();
    if(employeePrompt.role === 'Manager'){
        let managerAnswer = await promptForManager();
        let manager = new Manager(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role, managerAnswer.officeNum);
        managersArr.push(manager); 
    } else if(employeePrompt.role === 'Engineer'){
        let engineerAnswer = await promptForEngineer();
        let engineer = new Engineer(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role, engineerAnswer.github);
        engineersArr.push(engineer);
    } else if(employeePrompt.role === 'Intern'){
        let internAnswer = await promptForIntern();
        let intern = new Intern(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role, internAnswer.school);
        internsArr.push(intern);
    }
    let employeeEntry = await lastEmployee();
    if(employeeEntry.lastEntry === 'No'){
        await handleEmployee();
    } else if((employeeEntry.lastEntry === 'Yes') && (managersArr.length > 0) && (engineersArr.length > 0)){
        generateHTML(managersArr, engineersArr, internsArr);
    } else {
        console.log("Please ensure you have at lease one Manager AND at least one Engineer before selecting 'Yes' again.");
        await handleEmployee();
    }
}

module.exports = {
    lastEmployee,
    handleEmployee,
    managersArr,
    engineersArr,
    internsArr
}