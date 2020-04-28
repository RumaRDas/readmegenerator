const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

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

function getGitHub(username) {
  const queryUrl = `https://api.github.com/users/${username}?client_id=b77dd6d5ba39bf8bca34&client_secret=8a78678b6f246d35c590f5f6088859266fc6b0d2`;

  return axios.get(queryUrl);
}

async function init() {
  try {
    const data = await promptUser();
    getGitHub(data.username).then(function (res) {
      console.log(res.data);
      const completeData = {
        ...data,
        email: res.data.email,
        avatar_url: res.data.avatar_url
      }
console.log(completeData);
      const text = generateMarkdown(completeData);

      writeFileAsync("README.md", text);

      console.log("Successfully wrote to README.md");
    })
  } catch (err) {
    console.log(err);
  }
}

init();

