//🌟Exercise 1

const people = ["Greg", "Mary", "Devon", "James"];

//Part1
// Write code to remove “Greg” from the people array.
people.shift()
console.log(people)

// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.

let indexJames = people.indexOf('James')
people[indexJames] = 'Jason'
people.push('Anastasiya')
console.log(people)

// Write code that console.logs Mary’s index.
let indexMary = people.indexOf('Mary')
console.log(indexMary)

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
let peopleCopy = people.slice(1,3)
console.log(peopleCopy)
console.log(people)

// Write code that gives the index of “Foo”. Why does it return -1 ?
let indexFoo = people.indexOf('Foo')
console.log(indexFoo) //returns -1 as 'Foo' is not in array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length-1] //length of the array starts from 1 and indexes of items - from 0
console.log(last) 


//Part2
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i] == 'Devon') {
        break
    }
}


//🌟 Exercise 2 

// Create an array called colors where the value is a list of your five favorite colors.
let myFavColors = ['pink','green','blue','turquoise', 'brown']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 1; i <= myFavColors.length; i++) {
    console.log(`My #${i} choice is ${myFavColors[i-1]}`)
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
let suffixes = ['st','nd','rd','th']
for (let i = 1; i <= myFavColors.length; i++) {
    let minValue = Math.min(i-1, 3)
    console.log(`My #${i}${suffixes[minValue]} choice is ${myFavColors[i-1]}`)
}


// 🌟 Exercise 3 

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number = prompt('Enter any number: ')
console.log(number, typeof number) //prompt always returns a string

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let otherNumber = prompt('Enter any number: ')
while (Number(otherNumber) < 10) {
    console.log(otherNumber)
    otherNumber = prompt('Enter other number: ')
}


// 🌟 Exercise 4 

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
console.log(`${building.numberOfAptByFloor.firstFloor}, ${building.numberOfAptByFloor.thirdFloor}`)
//OR
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

let tenant2 = building.nameOfTenants[1]
console.log(tenant2, building.numberOfRoomsAndRent[tenant2.toLowerCase()][0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let rentSara = building.numberOfRoomsAndRent.sarah[1]
let rentDavid = building.numberOfRoomsAndRent.david[1]
let rentDan = building.numberOfRoomsAndRent.dan[1]

if (rentSara + rentDavid > rentDan) {
    rentDan = 1200
}

console.log(rentDan)

// 🌟 Exercise 5 

// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
let family = {
    father: 'Jhon',
    mother: 'Linda',
    son: 'Kenny',
    daughter: 'Susan'
}

for (let i in family) {
    console.log(i)
}
// Using a for in loop, console.log the values of the object.
for (let i in family) {
    console.log(family[i])
}

// 🌟 Exercise 6 

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let string = ''
for (let i in details) {
    let part = `${i} ${details[i]} `
    string += part
}
console.log (string)

// 🌟 Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter 
// of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
let societyName = ''
for (let i in names) {
    let firstLetter = names[i].slice(0,1)
    societyName += firstLetter
}
let secretSocietyName = societyName.split('').sort().join('')
console.log(secretSocietyName)