const fs = require('fs').promises;

async function readJSONFile(){
    try {
        const jsonStr = await fs.readFile('./config/tasks.json','utf-8');
        return JSON.parse(jsonStr);
        
    } catch (e) {
        console.log(`Error loading json: ${e}`);
    };
};

async function writeJSONFile(content) {
    try {
        await fs.writeFile('./config/tasks.json', JSON.stringify(content));
    } catch (e) {
        console.log(`Error loading json: ${e}`);
    };
};

module.exports = {
    readJSONFile,
    writeJSONFile
};