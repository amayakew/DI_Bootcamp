const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bookRouter = require('./routes/books.js');
const {testConnection} = require('./config/dbConnection.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/books', bookRouter);

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
    testConnection();
});



