import {readJSONFile, writeJSONFile} from '../config/jsonDB.js';


export const getUsers = async () => {
    try{
        return await readJSONFile();
    }
    catch (e){
        console.error(e);
        return [];
    }
}


export const updateUsers = async (users) => {
    try{
        return await writeJSONFile(users);
    }
    catch (e){
        console.error(e);
        throw e;
    }
}