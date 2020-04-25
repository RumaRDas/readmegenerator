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
      name: "installation",
      message: "What is your installatuon code?"
    },
    {
      type: "input",
      name: "license",
      message: "What is your License ?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    // {
    //   type: "input",
    //   name: "linkedin",
    //   message: "Enter your LinkedIn URL."
    // }
  ]);
}
function generatereadme(data) {
  return `
 
  # Project Name: 
   ${data.title}

  ## Description 
  ${data.description}
 (https://badgen.net/badge/color/blue/blue) 

 ## Table of Contents :
 * ${data.Usea}
 ## Installation :
 
 *****

 ${data.installation}

##  Usage
[![Watch the video](https://img.youtube.com/vi/T-D1KVIuvjA/maxresdefault.jpg)](https://youtu.be/T-D1KVIuvjA)
## License
${data.license}

## Contributing

## Tests

## Questions

[![Build Status](https://drive.google.com/file/d/1wGJP0dJNcQeQkvpz5pCF0GspWTYClW-b/view)](https://drive.google.com/file/d/1wGJP0dJNcQeQkvpz5pCF0GspWTYClW-b/view)
# [My GiThub Link]()
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
