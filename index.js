const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project"
    },
    {
      type: "input",
      name: "iinstallation",
      message: "What is your installatuon code?"
    },
    // {
    //   type: "input",
    //   name: "food",
    //   message: "What is your favorite food?"
    // },
    // {
    //   type: "input",
    //   name: "github",
    //   message: "Enter your GitHub Username"
    // },
    // {
    //   type: "input",
    //   name: "linkedin",
    //   message: "Enter your LinkedIn URL."
    // }
  ]);
}
function generatereadme(data) {
  return `
  # static-site [![NPM version](https://badge.fury.io/js/static-site.svg)](https://npmjs.org/package/static-site) [![Build Status](https://travis-ci.org/RumaRDas/static-site.svg?branch=master)](https://travis-ci.org/RumaRDas/static-site)
  # Project Name: 
   ${data.title}

  ## Description 
  ${data.description}
 (https://badgen.net/badge/color/blue/blue) 

 ## Table of Contents :
 * ${data.Usea}
 ## IInstallation :
 
##  Usage
## License
##Contributing

## Tests

## Questions
`
}


async function init() {
  console.log("hi")
  try {
    const data = await promptUser();

    const text = generatereadme(data);

    await writeFileAsync("readme.md", text);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();
