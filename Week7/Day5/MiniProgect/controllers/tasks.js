const {getTasks, updateTasks} = require('../models/tasksModel.js');

const getAllTasks = async (req,res) => {
    const dataFromFile = await getTasks();
    res.json(dataFromFile);
};

const getTask = async (req,res) => {
    const {id} = req.params;
    const dataFromFile = await getTasks();
    const task = dataFromFile.find(task => task.id == id);
    if (!task) {
        return res.status(404).json({message: 'Task is not found'});
    };
    res.json(task);
};

const addTask = async (req,res) => {
    const dataFromFile = await getTasks();
    const id = dataFromFile.length > 0 ? Math.max(dataFromFile.map(t => t.id)) + 1 : 1;
    const {name, isDone} = req.body;
    const newTask = {id,name,isDone};
    dataFromFile.push(newTask);
    await updateTasks(dataFromFile);
    res.json(newTask);
};

// {"name": "wash dishes", "isDone": true}
// {"name": "buy flowers", "isDone": false}
// {"name": "make cookies", "isDone": true}
// {"name": "eat cookies", "isDone": false}

const updateTask = async (req,res) => {
    const dataFromFile = await getTasks();
    const {id} = req.params;
    const {isDone} = req.body;
    const task = dataFromFile.find(task => task.id == id);
    if (!task){
        return res.status(404).json({message: 'Task is not found'});
    };
    task.isDone = isDone;
    await updateTasks(dataFromFile);
    res.json(task);
};

// {"isDone": true} for the 2nd task

const deleteTask = async (req,res) => {
    const dataFromFile = await getTasks();
    const {id} = req.params;
    const taskIndex = dataFromFile.findIndex(task => task.id == id);
    if (taskIndex == -1){
        return res.status(404).json({message: 'Task is not found'});
    };
    dataFromFile.splice(taskIndex, 1);
    await updateTasks(dataFromFile);
    res.json(dataFromFile);
};

module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
};