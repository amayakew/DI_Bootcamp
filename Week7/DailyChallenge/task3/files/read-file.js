// In read-file.js, require the fs module and read the content from the file-data.txt file. 
// Display the content in the terminal.

import fs from 'fs';

export function readFile(){
    fs.readFile('./task3/files/file-data.txt',(err,data) => {
        if (err) {
            console.log(err);
        };
        console.log(data.toString());
    });
};