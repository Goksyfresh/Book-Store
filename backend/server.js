import express from 'express';

import { PORT } from './config.js';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(express.json())
app.use('/api', bookRoutes)


app.listen(PORT, ()=> {
    connectDB(); 
    console.log(`Server is running at port : ${PORT}`)
})