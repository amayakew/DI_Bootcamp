// In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.
// Use the greet function to greet the user, display the colorful message, and read and display the file’s content.
// Run challenge.js using Node.js and see the complete challenge in action.

import {greet} from './task1/greeting.js';
import {colorText} from './task2/colorful-message.js';
import {readFile} from './task3/files/read-file.js';

const personalGreeting = greet('Mike');
console.log(personalGreeting);

colorText();
readFile();