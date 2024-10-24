import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Crear conexión a la base de datos MySQL usando variables de entorno
export const connectToDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'hotelmiranda',
    });

    console.log('MySQL connected successfully');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
};
