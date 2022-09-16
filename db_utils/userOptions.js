const connection = require("../config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
// const { catchError } = require("rxjs");
// const { get } = require("https");

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

// this will add  daepartent to datbase
async function addDepartment() {
  let deptData;

  try {
    [deptData] = await db.query(`SELECT name FROM department`);
  } catch (error) {
    console.log(error);
  }

  const { newDepartment } = await inquirer.prompt({
    type: "input",
    message: "What is the name of the departemnt?",
    name: "newDepartment",
  });

  const found = deptData.some(({ name }) => {
    return name == newDepartment;
  });

  if (!found) {
    try {
      const result = await db.query(
        `INSERT INTO deparment (name)
            VALUES ("${newDepartment}")`
      );
    } catch (error) {
      console.log(error);
    }

    getUserSelection();
  } else {
    console.log("This department already exists!");
  }
}
// this will display all deparment in in database

async function viewAllDeparments() {
  const [data] = await db.query(
    `SELECT * from department ORDER by department.name`
  );

  console.table(data);
  getUserSelection();
}

async function getUserSelection() {
  // connect to database
  db = await connection();
}

module.exports = { getUserSelection };
