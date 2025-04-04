// In app.js, import the functions from the fileManager.js module.
// Use the imported functions to read the content of the “Hello World.txt” text file and 
// then write to the “Bye World.txt” with the content “Writing to the file”.
// Run app.js and verify that the file reading and writing operations are successful.

const {readFile,writeFile} = require('./fileManager');

readFile('./hello_world.txt');
writeFile('./bye_world.txt','Writing to the file');