function generateMarkdown(data) {
  return `

  ![](${data.avatar_url})

  ## Email

      ${data.email}

  # Project Name: 
  ## ${data.title}


   ____
  ## Description 
  ${data.description}

 ## Table of Contents :
 1. [Title](https://github.com/${data.username}/readmegenerator)
 2. [Description](https://github.com/${data.username}/readmegenerator)
 3. [Installation](https://github.com/${data.username}/readmegenerator)
 4. [Usage](https://drive.google.com/drive/folders/1ESGf_F27lbAbyvDDRf2mNgTtgIwo7Th4?ths=true)
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

# [![github](https://img.shields.io/badge/mygithub-link-profile.svg)](https://github.com/${data.username})   [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://${data.username}.github.io/my_portfolio/)

[My GiThub Link](https://github.com/${data.username}/readmegenerator)
`;
}

module.exports = generateMarkdown;
