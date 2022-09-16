const mysql = require("mysql2/promise");
require("dotenv").config();

// database Connection
async function connection() {
    console.log('this is a test')
    return await mysql.createConnection({
        host: "localhost",
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: "employee_db",
    });

    
}



module.exports = connection;

