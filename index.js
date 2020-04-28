const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

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

  ]);
}

async function init() {
  console.log("hi")
  try {
    const data = await promptUser();

    const text = generatereadme(data);

    await writeFileAsync("README.md", text);

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();
