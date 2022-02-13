const inquirer = require('inquirer');
const { generateHTML } = require('./generateHTML');
const {Employee} = require('./employee')
const {Engineer} = require('./engineer')
const {Manager} = require('./manager')
const {Intern} = require('./intern')

let managersArr = [];
let engineersArr = [];
let internsArr = [];

async function handleEmployee(){
    let employeePrompt = await promptForEmployee();
    let employee = new Employee(employeePrompt.name, employeePrompt.email, employeePrompt.id, 'Employee')
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
    let employeeEntry = await userInput();
    if(employeeEntry.lastEntry === 'No'){
        await handleEmployee();
    } else if((employeeEntry.lastEntry === 'Yes') && (managersArr.length > 0) && (engineersArr.length > 0)){
        generateHTML(managersArr, engineersArr, internsArr);
    } else {
        console.log("Please ensure you have at lease one Manager AND at least one Engineer before selecting 'Yes' again.");
        await handleEmployee();
    }
}

module.exports = handleEmployee;