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

// this will add dapartent to datbase
async function addDepartment() {
  let deptData;

  try {
    [deptData] = await db.query(`SELECT name FROM department`);
  } catch (error) {
    console.log(error);
  }

  const { newDepartment } = await inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the departemnt?",
      name: "newDepartment",
    },
  ]);

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

async function addEmployee() {
  let currentEmployees;
  let managerInfo;
  let employeeFound;

  try {
    [currentEmployees] = await db.query(
      `SELECT CONCAT(first_name, " ", last_name) as name, id as value FROM employee`
    );
  } catch (error) {
    console.log(error);
  }

  try {
    [roleData] = await db.query(`select title as name, id value from role`);
  } catch (error) {
    console.log(error);
  }
 console.log(roleData)

  const { firstName, lastName, roleId, manager } = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's first name? ",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the employee's last name? ",
      name: "lastName",
    },
    {
      type: "list",
      message: "What is the employee's role? ",
      name: "roleId",
      choices: roleData,
    },
    {
      type: "list",
      message: "Who is the employee's manager? ",
      name: "manager",
      choices: managerInfo,
    },
  ]);

  currentEmployees.forEach((employee) => {
    if (
      employee.first_name.toLowerCase() === firstName.toLowerCase() &&
      employee.last_name.toLowerCase() === lastName.toLowerCase()
    )
      employeeFound = true;
  });

  if (employeeFound) {
    console.log(`${firstName} ${lastName} already exists`);
    getUserSelection();
  } else {
    await db.query(`
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES("${firstName}", "${lastName}", "${roleId}", "${manager}")
  `);
    getUserSelection();
  }
}

// Display all employee in database

async function viewAllEmployees() {
  const [data] = await db.query(
    `
    SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.title,
        role.salary, 
        department.name as department, 
        CONCAT(mgr.first_name, " ", mgr.last_name) as manager
        FROM employee 
        LEFT JOIN role ON role.id = employee.role_id 
        LEFT JOIN department ON department.id = role.department_id 
        LEFT JOIN employee as mgr ON employee.manager_id = mgr.id`
  );

  console.table(data);
  getUserSelection();
}

// Display all Roles in db
async function viewRoles() {
  const [data] = await db.query(
      `
      SELECT role.id, 
      role.title, 
      department.name as department, 
      role.salary 
      FROM role 
      LEFT JOIN department 
      ON role.department_id=department.id`
  );

  console.table(data);
  getUserSelection();
}


async function getUserSelection() {
  // connect to database
  db = db || (await connection());

  const { option } = await inquirer.prompt(userOptions);
  // to do - replaced undefined w/ functions
  const optionsToFunctions = {
    "View All Employees": viewAllEmployees,
    "Add Employee": addEmployee,
    "Update Employee Role": undefined,
    "View All Roles": viewRoles,
    "Add Role": undefined,
    "View All Departments": viewAllDeparments,
    "Add Department": addDepartment,
    Quit: process.exit,
  };

  optionsToFunctions[option]();
}

module.exports = { getUserSelection };
