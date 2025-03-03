// Exercise2

function winBattle(){
    return true;
}

// Transform the winBattle() function to an arrow function.
const winBattle = () => {
    return true;
}
// Create a variable called experiencePoints.
let experiencePoints;
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be 
// equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
winBattle() ? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints); //--> 10


// Exercise3

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. 
// The function should return true or false
// Check out the example below to see the expected output
const isString = (x) => {
    return typeof x == "string";  
}

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise4

//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sumOf = (x,y) => {
    return x + y;
}

sumOf(3,5);

// Exercise5

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
function weightInG (x) {
    return x * 1000;
}

weightInG(5);
// Then, use function expression and invoke it.
const weight = function(x) {
    return x * 1000;
}

weight(7);

// Write in a one line comment, the difference between function declaration and function expression.
    ///declaration is hoisted, expression - isn't; when declaration - func can't be without name, when expression - can.

// Finally, use a one line arrow function and invoke it.
const grams = (x) => {
    return x * 1000;
}

grams(8);


// Exercise6

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, 
// geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."

(function fam(childrenNum,parentName,location,job){
    console.log(`You will be a ${job} in ${location}, and married to ${parentName} with ${childrenNum} kids.`);
}) (5,'Jane','Paris','scientist');

// Exercise8

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, 
// medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like 
// 'The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>'.
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size = 'small') {
    function addIngredients(item1,item2,item3) {
        console.log(`The client wants a ${size} juice, containing ${item1}, ${item2}, ${item3}`);
    }
    addIngredients('orange','carrot','peach');
}

makeJuice('large')

// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants 
// a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
// Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice(size = 'small') {
    let ingredients = [];
    function addIngredients(item1,item2,item3) {
        ingredients.push(item1);
        ingredients.push(item2);
        ingredients.push(item3);
    }
    function displayJuice(){
        console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}`);
    }
    addIngredients('orange','carrot','peach');
    addIngredients('apple','banana','kiwi');
    displayJuice();
}

makeJuice('large');

