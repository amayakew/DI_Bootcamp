// Exercise 1

// Define an intersection type PersonWithAddress that combines Person and Address types. 
// Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city.

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

let person1: PersonWithAddress = {
  name: 'Paul',
  age: 34,
  street: 'Allenby',
  city: 'Tel-Aviv',
};

console.log(`${person1.name} is ${person1.age}. He lives on ${person1.street} street in ${person1.city}.`);



// Exercise 2

// Create a function describeValue that accepts number | string. 
// Use type guards to return a description based on the input type:
// "This is a number" for numbers.
// "This is a string" for strings.

const describeValue = (a: number | string): string => {
  if(typeof a === 'number'){
    return 'This is a number';
  };
  if(typeof a === 'string'){
    return 'This is string';
  }
  throw new Error('Invalid type');
};

console.log(describeValue(1));
console.log(describeValue('you'));
// console.log(describeValue(true)); //error



// Exercise 3

// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

let someValue: any = 'hello';

let upperCaseStr: string = (someValue as string).toUpperCase();
console.log(upperCaseStr);



// Exercise 4

// Create a function getFirstElement that takes an array of number | string and uses type assertions 
// to return the first element as a string. Test with arrays of mixed types.

const getFirstElement = (arr: (number | string)[]): string => {
  let firstElement = arr[0];
  return firstElement as string;
};

console.log(getFirstElement(['a','b','c']));
console.log(getFirstElement([1,2,3]), typeof getFirstElement([1,2,3])); 
console.log(getFirstElement([4,'2',3]));
// 'as string' doesn't change the type of an element at runtime, in console type of 1 or 4 will be number
// if i leave 'string' as return type, but will write return without 'as string' -> error will occured



// Exercise 5

// Create a generic function logLength that takes a parameter of type T constrained to types 
// with a length property (like string or Array). The function should log the length.

type HasLength = {
  length: number
}

const logLength = <T extends HasLength>(a: T): void => {
  console.log(a.length);
};

logLength('hello');
logLength([2,'hi',true]);
// logLength(1); -> error as number hasn't length property



// Exercise 6

// Define a type Employee that combines Person and Job using intersection types. 
// Create a function describeEmployee that takes an Employee object and uses type guards 
// to return a description based on whether the Job is a Manager or a Developer.
// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

//type Person already exists in this file, I will use it.

type Job = {
  position: string;
  department: string;
};

type Employee = Job & Person;

type Manager = Employee & {position: 'Manager'};
type Developer = Employee & {position: 'Developer'};

function isManager(obj: any): obj is Manager {
  return obj !== null && obj.position === 'Manager';
};

function isDeveloper(obj: any): obj is Developer {
  return obj !== null && obj.position === 'Developer';
};

const describeEmployee = (employee: Employee): string => {
  if(isManager(employee)) {
    return `${employee.name} (${employee.age} years old) is a ${employee.position.toLowerCase()}. ${employee.position} oversees the team, coordinates projects, and ensures goals are met efficiently.`;
  }
  if(isDeveloper(employee)) {
    return `${employee.name} (${employee.age} years old) is a ${employee.position.toLowerCase()}. ${employee.position} builds and maintains software by writing, testing, and debugging code.`;
  };
  return `${employee.name}'s role in company is very important.`
};

let employee1: Employee = {
  name: 'Jane',
  age: 33,
  position: 'CEO',
  department: 'Whole company',
};

let employee2: Developer = {
  name: 'Tom',
  age: 28,
  position: 'Developer',
  department: 'Development',
};

let employee3: Manager = {
  name: 'Sam',
  age: 31,
  position: 'Manager',
  department: 'Project management',
};

console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));
console.log(describeEmployee(employee3));



// Exercise 7

// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. 
// Use type assertions to ensure the parameter is treated as a string for formatting. The function should 
// format the input as a string.

const formatInput = <T extends {toString: () => string}>(value: T): string => {
  return value.toString();
};

console.log(formatInput(123), typeof formatInput(123));
console.log(formatInput(false), typeof formatInput(123));
// {toString: () => string} = type with prop 'toString' with type '() => string' (function that doesn't accept args and returns string);