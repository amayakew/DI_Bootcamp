// Create a function handleData that accepts an array of User | Product | Order. 
// Implement type guards to:
// For User objects, return a greeting message with the user’s name and age.
// For Product objects, return a message with the product ID and its price.
// For Order objects, return a summary of the order with its ID and amount.
// Ensure your function handles unexpected cases gracefully.

type User = {
  type: 'user';
  name: string;
  age: number;
};
 
type Product = {
  type: 'product';
  id: number;
  price: number;
};
 
type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

function isUser(obj: any): obj is User {
  return obj !== null && obj.type === 'user';
};

function isProduct(obj: any): obj is Product {
  return obj !== null && obj.type === 'product';
};

function isOrder(obj: any): obj is Order {
  return obj !== null && obj.type === 'order';
};

const handleData = (data: (User | Product | Order)[]) => {
  data.forEach(item => {
    if(isUser(item)){
      console.log(`Hi there ${item.name}. Are you ${item.age}? That's a nice age ;)`);
    }
    else if (isProduct(item)){
      console.log(`Product with the id ${item.id} costs ${item.price}. Do you want to buy it?`);
    }
    else if(isOrder(item)){
      console.log(`Your order id is ${item.orderId}. You've ordered ${item.amount} items. Good catch!`);
    }
    else { 
      console.error('Invalid type');
    }
  });
};

let user: User = {
  type: 'user',
  name: 'John',
  age: 28,
};

let product: Product = {
  type: 'product',
  id: 4435,
  price: 450,
};

let order: Order = {
  type: 'order',
  orderId: '76534',
  amount: 6,
};

let user1: string = 'Kate';

console.log(handleData([user, product,order, user1 as any]));