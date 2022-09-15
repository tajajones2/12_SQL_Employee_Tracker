const connectToDB = require("./config/connection");
const inquirer = require("inquirer");


//
let db;

// this is the Menu Options
const userOptions = [
    {
        type: "list",
        name: "option",
        message: "Please choose an option: ",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit",
        ],
    },
];

module.exports = { getUserSelection };