const express = require('express');
const tasksRouter = require('./routes/tasks.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});