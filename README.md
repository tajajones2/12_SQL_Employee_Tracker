# 12_SQL_Employee_Tracker

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.



AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business



## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Download or clone repo
2. Install nodejs https://nodejs.org/en/download/
3. Run npm i in terminal while under the repo directory
4. Create a .env file in the root of this project folder and then add following to it:
    - DB_USERNAME = '[an admin username]'
    - DB_PASSWORD = '[that user's password]'
5. In the terminal login to msql while in project directory
    - Run 'source db/schema.sql'
    - Run 'source db/seeds.sql'
    - Run 'exit'

## Usage

- GIVEN a command-line application that accepts user input when you start the application then you am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
- When you choose to view all departments then you are presented with a formatted table showing department names and department ids.
- When you choose to view all roles then you are presented with the job title, role id, the department that role belongs to, and the salary for that role.
- When you choose to view all employees then you are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
- When you choose to add a department then you are prompted to enter the name of the department and that department is added to the database.
- When you choose to add a role then you are prompted to enter the name, salary, and department for the role and that role is added to the database.
- When you choose to add an employee then you are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
- When you choose to update an employee role then you are prompted to select an employee to update and their new role and this information is updated in the database.


Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    
![alt text](image/employeetracker.png)


## Credits

- [Inquirer](https://www.npmjs.com/package/inquirer)
- [MySQL](https://www.mysql.com/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Console Table](https://www.npmjs.com/package/console-table)



## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
