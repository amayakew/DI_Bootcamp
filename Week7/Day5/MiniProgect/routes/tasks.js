const {Router} = require('express')
const { getAllTasks, getTask, addTask, updateTask, deleteTask } = require('../controllers/tasks.js');

const router = Router();

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;