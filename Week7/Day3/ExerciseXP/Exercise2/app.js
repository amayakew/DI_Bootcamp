const express = require('express');
const router = require('./routes/todos.js');

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

app.use(express.json());
app.use('/todos',router);
