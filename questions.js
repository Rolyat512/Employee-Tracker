const db = require("./db/DB");

const questions = [
    {
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    },
    {
        "type": "input",
        "name": "name",
        "message": "What is the name of the department?",
        "when": ({task}) => task == "add a department"
    },
    {
        "type": "input",
        "name": "title",
        "message": "What is the title of the role?",
        "when": ({task}) => task == "add a role"
    },
    {
        "type": "input",
        "name": "salary",
        "message": "What is the salary?",
        "when": ({task}) => task == "add a role"
    },
    {
        "type": "input",
        "name": "department_id",
        "message": "What is the department?",
        "choices": db.listDept,
        "when": ({task}) => task == "add a role"

    },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What would you like to do?"
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What is the name of the role?"
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What is the salary of the role?",
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "Which department does the role belong to?"
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What would you like to do?"
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What is the employee's first name?",
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What is the employee's last name?",
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What is the employee's role",
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "Who is the employee's manager?",
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "What would you like to do?",
    // },
    // {
    //     "type": "input",
    //     "name": "text",
    //     "message": "Which employee's role do you want to update?",
    // }
    
    

]

module.exports = questions; 