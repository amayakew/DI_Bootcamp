// Exercise 1

// Create a class Employee with the following properties:
// A private property name of type string.
// A private property salary of type number.
// A public property position of type string.
// A protected property department of type string.
// Also, include a constructor to initialize these properties. 
// Create a public method getEmployeeInfo that returns the employee’s name and position.

class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string){
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  getEmployeeInfo(): string {
    return `${this.name}, ${this.position}`;
  }
};

let employee = new Employee('Jane', 4000, 'customer success manager', 'customer success');
console.log(employee.getEmployeeInfo());



// Exercise 2

// Create a class Product with the following properties:
// A readonly property id of type number.
// A public property name of type string.
// A public property price of type number.
// Create a method getProductInfo that returns a string with the product’s name and price. 
// Attempt to modify the id property after creating a new instance of the class and observe the result.

class Product {
  constructor(readonly id: number, public name: string, public price: number){
    // this.id = id;
    // this.name = name;
    // this.price = price;
    // when properties are declared in constructor, this. statements are not necessary.
  };

  getProductInfo(): string{
    return `${this.name} - ${this.price}`;
  }
};

let avocado = new Product(1,'avocado', 40);
console.log(avocado.getProductInfo());
// avocado.id = 4; -> error "Cannot assign to 'id' because it is a read-only property."



// Exercise 3

// Create a base class Animal with a public property name and a method makeSound that returns a string. 
// Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). 
// Create an instance of the Dog class and call the makeSound method.

class Animal {
  constructor(public name: string){
    // this.name = name; 
  }

  makeSound(): string{
    return `${this.name} is an animal and it's sound is 'animal sound'`;
  }
};

class Dog extends Animal {
  constructor(public name:string){
    super(name);
  }

  makeSound(): string {
    return `${this.name} is a dog and it's sound is 'bark'`;
  }
};

let lion = new Animal('Lion');
console.log(lion.makeSound());
let dingo = new Dog('Dingo');
console.log(dingo.makeSound());



// Exercise 4

// Create a class Calculator with the following static methods:
// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.

class Calculator {
  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }
};

console.log(Calculator.add(3,4));
console.log(Calculator.subtract(7,4));

// Exercise 5 

// Create an interface User with properties id (readonly), name, and email. 
// Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel. 
// Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

interface User {
  readonly id: number | string,
  name: string,
  email: string
};

interface PremiumUser extends User {
  membershipLevel?: string;
}

const printUserDetails = (user: PremiumUser) => {
  console.log(user);
};

let user1 = {
  id: 175678654,
  name: 'Mike',
  email: 'mike777@gmail.com',
  membershipLevel: 'guest',
};

printUserDetails(user1);