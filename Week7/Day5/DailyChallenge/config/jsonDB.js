import fs from 'fs/promises';

export async function readJSONFile(){
    try {
        const jsonStr = await fs.readFile('./config/users.json','utf-8');
        return JSON.parse(jsonStr);
        
    } catch (e) {
        console.log(`Error loading json: ${e}`);
    };
};

export async function writeJSONFile(content) {
    try {
        await fs.writeFile('./config/users.json', JSON.stringify(content));
    } catch (e) {
        console.log(`Error loading json: ${e}`);
    };
};