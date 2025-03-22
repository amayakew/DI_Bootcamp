import express from 'express';
import cors from 'cors';
import router from './routes/users.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/', express.static(__dirname + '/public'));
app.use(express.json());
app.use('/',router);

app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});