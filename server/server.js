import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
dotenv.config();
import userRoute from './routes/userRoute.js'

// DB Connection
connectDB();

const app = express();

// Routes
app.use('/api/user', userRoute);

app.listen(3000, () => console.log(`Server is running on port 3000`));