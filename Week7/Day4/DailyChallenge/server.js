import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import router from './routes/users.js';
import {testConnection} from './config/dbConnection.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/',router);

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
    testConnection();
});