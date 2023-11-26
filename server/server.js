import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
dotenv.config();
import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

const app = express();

// DB Connection
connectDB();

// Middleware
app.use(express.json())

// Routes
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(3000, () => console.log(`Server is running on port 3000`));