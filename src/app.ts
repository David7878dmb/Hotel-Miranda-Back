import express from 'express';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoutes';
import userRoutes from './routes/userRoutes';
import roomsRoutes from './routes/roomsRoutes';
import contactRoutes from './routes/roomsRoutes';
import bookingRoutes from './routes/bookingRoutes';

// Cargar variables de entorno del archivo .env
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.use(express.json());
app.use(publicRoutes);
app.use('/user', userRoutes);
app.use('/room', roomsRoutes);
app.use('/contact', contactRoutes);
app.use('/booking', bookingRoutes)

export default app;