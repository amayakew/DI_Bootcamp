const {readJSONFile, writeJSONFile} = require('../config/jsonDB.js');

const getAllTasks = async (req,res) => {
    const dataFromFile = await readJSONFile();
    res.json(dataFromFile);
};

const getTask = async (req,res) => {
    const {id} = req.params;
    const dataFromFile = await readJSONFile();
    const task = dataFromFile.find(task => task.id = id);
    if (!task) {
        res.status(404).json({message: 'Task is not found'});
    };
    res.json(task);
};

const addTask = async (req,res) => {
    const dataFromFile = await readJSONFile();
    const id = dataFromFile.length + 1;
    const {name, isDone} = req.body;
    const newTask = {id,name,isDone};
    dataFromFile.push(newTask);
    await writeJSONFile(dataFromFile);
    res.json(newTask);
};

// {"name": "wash dishes", "isDone": true}
// {"name": "buy flowers", "isDone": false}
// {"name": "make cookies", "isDone": true}
// {"name": "eat cookies", "isDone": false}

const updateTask = async (req,res) => {
    const dataFromFile = await readJSONFile();
    const {id} = req.params;
    const {isDone} = req.body;
    const task = dataFromFile.find(task => task.id = id);
    if (!task){
        res.status(404).json({message: 'Task is not found'});
    };
    task.isDone = isDone;
    await writeJSONFile(dataFromFile);
    res.json(task);
};

// {"isDone": true} for the 2nd task

const deleteTask = async (req,res) => {
    const dataFromFile = await readJSONFile();
    const {id} = req.params;
    const taskIndex = dataFromFile.findIndex(task => task.id == id);
    if (taskIndex == -1){
        res.status(404).json({message: 'Task is not found'});
    };
    dataFromFile.splice(taskIndex, 1);
    await writeJSONFile(dataFromFile);
    res.json(dataFromFile);
};

module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
};