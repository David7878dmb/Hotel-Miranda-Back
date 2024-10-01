import express from 'express';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoutes';

// Cargar variables de entorno del archivo .env
dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(publicRoutes);


export default app;