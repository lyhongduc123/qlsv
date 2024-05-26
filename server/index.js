import express from 'express';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/server/posts', postRoutes);
app.use('/server/users', userRoutes);
app.use('/server/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});