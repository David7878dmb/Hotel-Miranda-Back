import express from 'express';
import dotenv from 'dotenv';

// Cargar variables de entorno del archivo .env
dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});


export default app;