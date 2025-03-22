const {readJSONFile, writeJSONFile} = require('../config/jsonDB.js');

export const getTasks = async () => {
    try {
        return await readJSONFile();
    }
    catch (e) {
        console.error(e);
        return [];
    }
};

export const updateTasks = async (tasks) => {
    try {
        return await writeJSONFile(tasks);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};