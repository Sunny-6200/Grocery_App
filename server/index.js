import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
dotenv.config();
import authRouter from './routes/auth.routes.js';
import adminRouter from './routes/admin.routes.js';
const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('server is running');
});

app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});