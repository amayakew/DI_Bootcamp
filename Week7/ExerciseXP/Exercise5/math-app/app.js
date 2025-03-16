// In app.js, require the lodash package and the custom math module.
// Use the exported functions from the math module and the utility functions from the lodash package 
// to perform calculations.
// Run app.js using Node.js and verify that the calculations are correct

import _ from 'lodash';
import { addition,multiplication } from './math.js';

const lodashAdd = _.add(3,7);
const mathAdd = addition(3,7);
console.log(lodashAdd === mathAdd);

const lodashMult = _.multiply(3,7);
const mathMult = multiplication(3,7);
console.log(lodashMult === mathMult);