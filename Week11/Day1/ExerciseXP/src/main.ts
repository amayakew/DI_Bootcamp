// Exercise 1

//Create a TypeScript program that logs the message “Hello, World!” to the console.

let message: string = 'Hello World!';
console.log(message);

// Exercise 2

// Define a variable age of type number and a variable name of type string, and log them to the console.
let age: number = 23;
let userName: string = 'Lily';
console.log(userName,age);

// Exercise 3

// Use union types to declare a variable id that can be either a string or a number.

let id: string | number;
id = 'kdmjfdkv';
// OR
id = 2332435;
console.log(id);

// Exercise 4

// Write a function that takes a number as input and returns 
// a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

const getNumberType = (num: number): string => {
    if (num < 0) return `Number ${num} is negtive`;
    if (num > 0) return `Number ${num} is positive`;
    return `Your number is 0`;
}
const positiveNumber = getNumberType(3);
console.log(positiveNumber);
const negativeNumber = getNumberType(-3);
console.log(negativeNumber);
const zeroNumber = getNumberType(0);
console.log(zeroNumber);

// Exercise 5

// Create a function getDetails that takes a name and age as input and returns 
// a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

const getDetails = (name: string, age: number): [string, number, string] => {
    return [name, age, `Hello, ${name}! You are ${age} years old`];
};

const greetingTom = getDetails('Tom', 28);
console.log(greetingTom);

// Exercise 6

// Create an object type annotation that defines the shape of a Person object. 
// The object should have two properties: name (a string) and age (a number).
// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.
// Test the createPerson function by creating a person and logging the result to the console.

type Person = {
    name: string,
    age: number,
};

const createPerson = (name: string, age: number): Person => {
    return {name,age}
};

const person1 = createPerson('Anna', 32);
console.log(person1);

// Exercise 7 

// Get an Element from the DOM:
// Use document.getElementById() to retrieve an HTML element from the DOM.
// Use Type Assertion:
// Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
// Access the Element’s Properties:
// Once cast, use the properties of the specific element type, like setting the value of an input element.
// Ensure that you can successfully set or manipulate a property of the element.

let input = document.getElementById('my-input') as HTMLInputElement;
// ts doesn't know exact type of html element, 'as ...' helps to define it = type assertion
input.value = 'dog';


// Exercise 8

// Create a function getAction that takes a string representing a user role and returns an action for the user. 
// Use a switch statement with complex conditions to handle multiple roles.

const getAction = (role: string): string => {
    switch (role.toLowerCase()) {
        case 'admin':
            return `${role} manages users and settings`;
        case 'editor':
            return `${role} edits content`;
        case 'viewer':
            return `${role} views content`;
        case 'guest':
            return `${role} limits access`;
        default:
            return `${role} is an invalid role`;
    };
};

const adminAction = getAction('Admin');
console.log(adminAction);
const editorAction = getAction('editor');
console.log(editorAction);
const viewerAction = getAction('viewer');
console.log(viewerAction);
const guestAction = getAction('Guest');
console.log(guestAction);
const undefinedAction = getAction('sales Manager');
console.log(undefinedAction);

// Exercise 9

// Create an overloaded function greet that can either take a name and greet the person, 
// or take no arguments and return a default greeting.

// Overloaded function
// function greeting(): string;
// function greeting(name: string): string;

const greeting = (name?: string): string => {
    if (name) {
        return `Hi, ${name}, glad to see you again!`;
    }
    return `Hello, my friend. Nice to meet you! `
};

const personalGreeting = greeting('Kate');
console.log(personalGreeting);
const defaultGreeting = greeting();
console.log(defaultGreeting);




// Overloaded function example

// function logError(message: string, context: string): void;
// function logError(message: string, error: Error, context: string): void;
// function logError(message: string, errorOrContext: Error | string, context?: string): {

// }

// logError('blabla', 'blvla2')
// logError('blabla', new Error(), 'lblaba')