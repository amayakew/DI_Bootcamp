// 🌟 Exercise 1

// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

function displayNumbersDivisible(){
    let numbers = '';
    let sum = 0;
    for (let i = 0; i <= 500; i++){
        if (i % 23 == 0){
            numbers += `${i} `;
            sum += i;
        }
    }
    console.log(numbers);
    console.log(sum);
}

displayNumbersDivisible();

// Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

function displayNumbersDivisible2(divisor){
    let numbers = '';
    let sum = 0;
    for (let i = 0; i <= 500; i++){
        if (i % divisor == 0){
            numbers += `${i} `;
            sum += i;
        }
    }
    console.log(numbers);
    console.log(sum);
}

displayNumbersDivisible2(3);
displayNumbersDivisible2(45);


// 🌟 Exercise 2 

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
// It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

const shoppingList = ['banana', 'orange', 'apple'];
let sum = 0;

function myBill(){
    for (i in shoppingList){
        const product = shoppingList[i];
        if (stock[product] == 0){
            console.log(`Sorry, no ${product}s left`);
        } else {
            sum += prices[product];
            stock[product]--;
        }
    }
    console.log(`Total sum for your purcheses is ${sum}`);
    console.log(`The list of remaining items:`, stock);
    return sum;
}

myBill ();


// 🌟 Exercise 3 
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), 
// the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) 
// the function should return false

function changeEnough(itemPrice, amountOfChange) {
    const change = {
        quarter: 0.25,
        dime: 0.10,
        nickel: 0.05,
        penny: 0.01
    }
    let changeList = [];
    let myWallet = 0;
    for (i in change){
        changeList.push(change[i]);
    }
    for (j in amountOfChange){
        myWallet += amountOfChange[j] * changeList[j];
    }
    if (myWallet >= itemPrice){
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));


// 🌟 Exercise 4 

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(){
    let numNights;
    const costPerNight = 140
    do {
        numNights = prompt('How many nights you would like to stay in the hotel?');
        if (numNights !== '') {
            numNights = Number(numNights);
        }
    }
    while (numNights === '' || isNaN(numNights)); 
    
    let totalPrice = numNights * costPerNight;
    return totalPrice;
}

hotelCost();

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost(){
    let destination;
    do {
        destination = prompt('What city you want to visit?');
    }
    while (destination === '' || !isNaN(Number(destination)));
    if (destination === 'London'){
        return 183;
    } else if (destination === 'Paris'){
        return 220;
    } else {
        return 300;
    }
}

planeRideCost();

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(){
    let rentCarDuration;
    const carCostPerDay = 40;
    let carTotalCost;
    do {
        rentCarDuration = prompt('How long you want to rent a car for?');
        if (rentCarDuration !== '') {
            rentCarDuration = Number(rentCarDuration);
        }
    }
    while (rentCarDuration === '' || isNaN(rentCarDuration));

    if (rentCarDuration > 10){
        carTotalCost = rentCarDuration * carCostPerDay * 0.95
    } else {
        carTotalCost = rentCarDuration * carCostPerDay
    }
    return carTotalCost
}

rentalCarCost();



// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling 
// the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function 
// totalVacationCost().
// Call the function totalVacationCost()

function totalVacationCost(){
    let totalCost = hotelCost() + planeRideCost() + rentalCarCost()
    return totalCost
}