// In copy-file.js, use the fs module to read the content from a file named source.txt 
// and then write the same content to a new file named destination.txt.

import fs from 'fs';

fs.readFile('./source.txt',(err,data)=>{
    if (err){
        console.log(err);
    };
    console.log(data.toString());
    fs.writeFile('./destination.txt',data.toString(),(err) => {
        if (err){
            console.log(err);
        };
        console.log('Writed successfully');
    });
});