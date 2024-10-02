import express from 'express';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoutes';
import userRoutes from './routes/userRoutes';

// Cargar variables de entorno del archivo .env
dotenv.config();

const app = express();

app.use(express.json());
app.use(publicRoutes);
app.use('/user', userRoutes)

export default app;