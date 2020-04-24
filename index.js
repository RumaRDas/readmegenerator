const inquirer = require("inquirer");

const questions = [

];

function writeToFile(fileName, data) {


}

function init() {
    inquirer.prompt().then(data => {
        console.log(data);
    })

}

init();
