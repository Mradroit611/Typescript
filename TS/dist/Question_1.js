"use strict";
function displayEmployeeInfo(employee) {
    console.log(`Employee ID: ${employee.id}`);
    console.log(`Name: ${employee.name}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Active: ${employee.isActive ? 'Yes' : 'No'}`);
    if (employee.role) {
        console.log(`Role: ${employee.role}`);
    }
    console.log(`Projects: ${employee.projects.join(', ')}`);
}
let employees = [
    {
        id: 1,
        name: 'Alice',
        age: 30,
        department: 'Engineering',
        isActive: true,
        projects: ['Project A', 'Project B'],
        role: 'Software Engineer'
    },
    {
        id: 2,
        name: 'Bob',
        age: 28,
        department: 'Marketing',
        isActive: false,
        projects: ['Campaign X', 'Campaign Y']
    },
    {
        id: 3,
        name: 'Charlie',
        age: 32,
        department: 'Finance',
        isActive: true,
        projects: ['Budget Analysis']
    }
];
function filterActiveEmployees(employees) {
    return employees.filter(emp => emp.isActive);
}
let firstEmployee = employees[0];
console.log(`First Employee: ${firstEmployee.name}`);
let userInput = 'abc123';
function printArray(arr) {
    arr.forEach(item => console.log(item));
}
displayEmployeeInfo(employees[0]);
let activeEmployees = filterActiveEmployees(employees);
console.log('Active Employees:');
printArray(activeEmployees.map(emp => emp.name));
