const inquirer = require('inquirer');
const { generateHTML } = require('./generateHTML');
const {Employee} = require('./employee')
const {Engineer} = require('./engineer')
const {Manager} = require('./manager')
const {Intern} = require('./intern')

let managersArr = [];
let engineersArr = [];
let internsArr = [];