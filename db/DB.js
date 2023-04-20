const connection = require("./connection");
const cTable = require("console.table");

class DB {
  constructor(db) {
    this.db = db;
  }

  getDep = () =>
    this.db
      .promise()
      .query("SELECT * from department")
      .then(([data]) => console.table(data));

  getRole = () =>
    this.db
      .promise()
      .query(
        `
            SELECT 
                r.id,
                r.title,
                r.salary,
                d.name department
            FROM role r
            JOIN department d
            ON r.department_id=d.id;
        `
      )
      .then(([data]) => console.table(data));

  getEmployees = () =>
    this.db
      .promise()
      .query(
        `
            SELECT 
                e.id,
                e.first_name,
                e.last_name,
                r.title,
                CONCAT(e2.first_name," ", e2.last_name) manager
            FROM employee e 
            JOIN role r 
            ON e.role_id=r.id
            JOIN department d 
            ON r.department_id=d.id
            LEFT JOIN employee e2
            ON e.manager_id=e2.id
            `
      )
      .then(([data]) => console.table(data));

  addDept = ({ name }) =>
    this.db.promise().query("INSERT INTO department SET ?", { name });

    listDept = () => 
        this.db.promise().query("SELECT name, id value FROM department").then(([data]) => data);

  addRole = ({ name }) =>
    this.db.promise().query("INSERT INTO department SET ?", { name });

    addEmpç = ({ name }) =>
        this.db.promise().query("INSERT INTO department SET ?", { name });
}

let db = new DB(connection);

console.log(db.listDept());
module.exports = new DB(connection);
