//🌟Exercise 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// 'I am John Doe from Vancouver, Canada. Latitude (49.2827), Longitude (-123.1207)'
//all the person obj values of keys founded in this obj were saved in variables and then called through them


//🌟Exercise 2

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
    const {first: firstname, last: lastname} = objUser;
    return `Your full name is ${firstname} ${lastname}`
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//🌟Exercise 3:

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Using methods taught in class, turn the users object into an array:
// Modify the outcome of part 1, by multipling the user’s ID by 2.

const usersArr = Object.entries(users).map((entry) => [entry[0], entry[1] * 2]);
console.log(usersArr);

//🌟Exercise 4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);// type Object


//🌟Exercise 5

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Analyze the options below. Which constructor will successfully extend the Dog class?

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
//correct


//🌟Exercise 6

//1. Evaluate these (ie True or False)

`[2] === [2] 
{} === {}`

//both false, as complex objects hold pointer to the data in memory instead of value, so we compare pointers which are different, even if values are same;


//2. What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4
console.log(object3.number)//4
console.log(object4.number)//5
//same as before: objects 1-3 have the same pointer(they are copies) and are changed together, the 4th is completly new object with its own place in memory


// Create a class Animal with the attributes name, type and color. The type is the animal type, 
// for example: dog, cat, dolphin etc …

class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    };
}

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    };

    sound(sound){
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    };
};

// Create a farmerCow object that is an instance of the class Mammal. 
// The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal('Lily','cow','brown and white');
console.log(farmerCow.sound('Moooo'));