import express from 'express';
import {router} from './routes/books.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

app.use(express.json());
app.use('/books',router);