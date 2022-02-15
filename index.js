
const fs = require('fs');
const {handleEmployee, managersArr, engineersArr, internsArr} = require('./lib/handleemployee');
const {generateManagers, generateEngineers, generateInterns, generateHTML} = require('./src/generatehtml');

// function to write an empty index.html file

function writeToFile(data) {
    fs.writeFile("index.html", data, 
    (err) => err ? console.error(err) : console.log("index.html has been generated."))
}

// async function to populate the index.html file with employees data

async function init() {
    await handleEmployee();
    writeToFile(generateHTML(managersArr,engineersArr,internsArr));
}

init();



