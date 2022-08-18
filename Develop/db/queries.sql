USE employee_db;



SELECT 
employee.id, 
employee.first_name, 
employee.last_name,
role.title,
department.name
role.salary
CONCAT(mgr.first_name, " " , mgr.last_name) as manager
FROM employee
LEFT JOIN role ON role.id= employee.role_id
