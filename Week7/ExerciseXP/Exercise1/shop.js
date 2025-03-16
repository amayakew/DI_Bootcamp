// In shop.js, require the product objects from the products.js module.
// Create a function that takes a product name as a parameter and searches for the corresponding product object.
// Call this function with different product names and print the details of the products.
// Run shop.js and verify that the correct product details are displayed.

const products = require('./products.js');

function getProductInfo(name){
    const product = products.find(product => product.name === name);
    if (product){
        console.log(product);
    } else {
        console.log('Invalid choice');
    };
};

getProductInfo('apple'); // apple object
getProductInfo('cheese'); //invalid choice
getProductInfo('rose'); //rose object