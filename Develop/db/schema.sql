DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT NO NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)

);

CREATE TABLE ROLE (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR (30) 
     salary DECIMAL (10,2)
     department_id int,
    FOREIGN KEY (department_id) REFERENCES department (id) 

);
