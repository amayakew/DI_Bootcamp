//🌟Exercise 1

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

    // Write a JavaScript program that displays the colors in the following order : 
    // “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

colors.forEach((color,i) => {
    console.log(`${i+1}# choice is ${color}`);
});

    // Check if at least one element of the array is equal to the value “Violet”.
    // If yes, console.log("Yeah"), else console.log("No...") 

colors.some(color => color === 'Violet') ? console.log("Yeah") : console.log("No");



//🌟Exercise 2 

const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

    // Write a JavaScript program that displays the colors in the following order : 
    // “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

let [a,...rest] = ordinal;
colors2.forEach((color,i) => {
    i < 3 ? console.log(`${i+1}${rest[i]} choice is ${color}`) : console.log(`${i+1}${a} choice is ${color}`);
});


//🌟Exercise 3

    // Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);//---> ['bread','carrot','potato','chicken','apple','orange'] = SPREAD OPERATOR, elements are unpacked

// ------2------
const country = "USA";
console.log([...country]);//---> ['U','S','A'] as string is an array of chars + SPREAD OPERATOR


//🌟Exercise 4 

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//1. Using the map() method, push into a new array the firstname of the user and a welcome message.

const welcomeEmployees = users.map(employee => `Hello ${employee.firstName}`);
console.log(welcomeEmployees);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

const fsResidents = users.filter(employee => employee.role == 'Full Stack Resident');
console.log(fsResidents);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const lastNames = users.filter(employee => employee.role == 'Full Stack Resident').map(employee => employee.lastName);
console.log(lastNames);


//🌟Exercise 5

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const openStarWars = epic.reduce((i, j) => `${i} ${j}`);
console.log(openStarWars);


//🌟Exercise 6 

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name 
// and course name (ie. “Good job Jenner, you passed the course in Information Technology”, 
// “Good Job Marco you passed the course in Robotics” ect…)

const goodStudents = students.filter(student => student.isPassed).forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`));
console.log(goodStudents);