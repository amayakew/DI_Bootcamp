// In app.js, import the array of person objects from the data.js module.
// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js.
// Run app.js and confirm that the average age is correctly calculated and displayed.

import {employees} from './data.js';

function getAverageEmployeesAge(array){
    const allAges = array.reduce((age, employee) => age + employee.age, 0);
    const averageAge = (allAges / array.length).toFixed(0);
    console.log(averageAge);
};

getAverageEmployeesAge(employees);