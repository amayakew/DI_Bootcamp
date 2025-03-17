// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

const fs = require('fs');

function readFile(filePath){
    fs.readFile(filePath,(err,data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.toString());
    });
};

function writeFile(filePath,content){
    fs.writeFile(filePath,content, (err) => {
        if (err){
            console.log(err);
        };
        console.log('File updated successfully');
    })
};

module.exports = {readFile,writeFile};