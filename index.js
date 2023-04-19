const { prompt } = require('inquirer');
const DB = require('./db/DB');
const questions = require("./questions");

const init = () => {
    prompt(questions).then(ans => {
        let {task} = ans;

        if(task == "view all departments") DB.getDep().then(init);
        if(task == "view all roles") DB.getRole().then(init);
        if(task == "view all employees") DB.getEmployees().then(init);
        if(task == "add a department") DB.addDept(ans).then(init);
        if(task == "add a role") DB.addRole(ans).then(init);
        if(task == "add an employee") DB.addEmp(ans).then(init);

    });
};

init();
