import express from 'express';
import cors from 'cors';
import helloRouter from './routes/hello.js'

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', helloRouter)


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})