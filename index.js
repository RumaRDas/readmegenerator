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
      message: "Please Describe your project"
    },
    {
      
      type: "list",
      name: "content",
      choices: [
          "Description\n",
          "Table of content\n",
          "Installation\n",   ],
      message: "Choose Content of Table"
   
  },
  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "stack",
    choices: [
      "Description\n",
      "Table of content\n",
      "Installation\n",   
    ]
  },


    {
      type: "input",
      name: "installation",
      message: "How to Install it?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {   
      type:"input",
      name:"GithubURL",
      message:"Enter your Github Project URL"      

  },
  {   
    type:"input",
    name:"contributing",
    message:"Enter the name of Contributor"
},
{   
  type: "input",
  name: "license",
  message:"Enter license details please"
},
{   
  type:"input",
  name:"test",
  message:"Enter the name of Tests done"
},
{   
  type:"input",
  name:"question",
  message:"Ask if you have any questions"
}
  ]);
}
function generatereadme(data) {
  return `
 
  # Project Name: 

  ## ${data.title}
   ____
 

## License\n
         ${data.license}\n

## Contributing
${data.contributing}

## Tests

         ${data.test}

## Questions [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://rumardas.github.io/my_portfolio/)
${data.question}


https://badgen.net/badge/icon/github?icon=github&label

# [![github](https://img.shields.io/badge/mygithub-link-profile.svg)](https://github.com/RumaRDas-colors)

[My GiThub Link](https://github.com/RumaRDas/readmegenerator)
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
