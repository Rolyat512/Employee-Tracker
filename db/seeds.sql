USE employee_db;

INSERT INTO department 
    (name)
VALUES 
    ("Sales"),
    ("HR"),
    ("Accounting");

INSERT INTO role 
    (title, salary, department_id)
VALUES  
    ("Sales Rep", 80000, 1),
    ("HR Rep", 60000, 2),
    ("Accountant", 75000, 3);

INSERT INTO employee
    (first_name,last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 1, NULL),
    ("Bob", "Bobby", 2, 1),
    ("Dillon", "Ford", 3, 1);


