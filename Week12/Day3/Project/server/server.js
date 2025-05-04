import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRouter from './routes/authRouter.js';
import storiesRouter from './routes/storiesRouter.js';
import contributorsRouter from './routes/contributorsRouter.js';

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
  }));

app.use('/api', authRouter);
app.use('/api', storiesRouter);
app.use('/api', contributorsRouter);

