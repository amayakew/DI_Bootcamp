const {Router} = require('express');
const router = Router();

const todos = [
    {id: 1, name: 'wash dishes', isDone: true},
    {id: 2, name: 'buy flowers', isDone: false},
    {id: 3, name: 'make cookies', isDone: true},
];

router.get('/', (req,res) => {
    res.send(todos);
});

router.post('/',(req,res) => {
    const id = todos.length + 1;
    const {name, isDone} = req.body;
    const newTask = {id,name,isDone};
    todos.push(newTask);
    res.send(todos);
});

// {"name": "eat cookies", "isDone": "false"}

router.put('/:id',(req,res) => {
    const {id} = req.params;
    const {isDone} = req.body;
    const taskToUpdate = todos.find(task => task.id == id);
    if (!taskToUpdate){
        res.status(404).json({message: 'Task not found'});
    } else {
        taskToUpdate.isDone = isDone;
        res.send(taskToUpdate);
    };
});

// {"isDone": true} for the 2nd task

router.delete('/:id',(req,res) => {
    const {id} = req.params;
    const taskToDelete = todos.findIndex(task => task.id == id);
    if (taskToDelete == -1){
        res.status(404).json({message: 'Task not found'});
    } else {
        todos.splice(taskToDelete,1);
        res.send(todos);
    };
});

module.exports = router;