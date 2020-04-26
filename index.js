const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub Username"
    },

    {
      type: "input",
      name: "title",
      message: "What is your Project Title?"
    },
    {
      type: "input",
      name: "description",
      message: "Please Describe your project"
    },
   
    {
      type: "input",
      name: "installation",
      message: "How to Install it?"
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter the name of Contributor"
    },
    {
      type: "input",
      name: "license",
      message: "Enter license details please"
    },
    {
      type: "input",
      name: "test",
      message: "Enter the name of Tests done"
    },
    {
      type: "input",
      name: "question",
      message: "Ask if you have any questions"
    }
  ]);
}
function generatereadme(data) {
  return `

  # Project Name: 
  ## ${data.title}
   ____
  ## Description 
  ${data.description}

 ## Table of Contents :
 1. [Title](https://github.com/${data.username}/readmegenerator)
 2. [Description](https://github.com/${data.username}/readmegenerator)
 3. [Installation](https://github.com/${data.username}/readmegenerator)
 4. [Usage](https://github.com/${data.username}/readmegenerator)
 5. [License](https://github.com/${data.username}/readmegenerator)

 ## Installation : 
     ${data.installation}
##  Usage
                *  Here is a video sample of How to use This README file.

![](./assets/demo.gif)
## License

         ${data.license}

## Contributor

${data.contributing}

## Tests

         ${data.test}

# [![github](https://img.shields.io/badge/mygithub-link-profile.svg)](https://github.com/RumaRDas)   [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://${data.username}.github.io/my_portfolio/)

[My GiThub Link](https://github.com/${data.username}/readmegenerator)
`
}

async function init() {
  console.log("hi")
  try {
    const data = await promptUser();

    const text = generatereadme(data);

    await writeFileAsync("readme.md", text);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();
