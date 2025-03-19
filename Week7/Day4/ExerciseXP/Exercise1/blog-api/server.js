const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const blogRouter = require('./routes/posts.js');
const {testConnection} = require('./config/dbConnection.js');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
    testConnection();
});

app.use('/posts', blogRouter);