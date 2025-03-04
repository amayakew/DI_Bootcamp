const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the first element in an array that pass a test.

function getCarHonda(carInventory) {
    const car = carInventory.find(car => car.car_make == 'Honda');
    console.log(`This is a ${car.car_make} ${car.car_model} from ${car.car_year}`);
};

getCarHonda(inventory);

// the function should return an inventory that is sorted by car_year, ascending.

function sortCarInventoryByYear(carInventory) {
    carInventory.sort((i, j) => i.car_year - j.car_year);
    console.log(carInventory);
}

sortCarInventoryByYear(inventory);