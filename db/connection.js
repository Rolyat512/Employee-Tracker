
require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    database: "employee_db",
    user: "root",
    password: process.env.DB_PW, 
});

db.connect((err)=> {
    if(err) throw err;
});

module.exports = db;

