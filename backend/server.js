import express from 'express';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv'


const app = express();

dotenv.config();

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.json())

app.use('/api', bookRoutes);




app.listen(5000, ()=> {
    connectDB(); 
    console.log('Server is running at port: 5000')
})