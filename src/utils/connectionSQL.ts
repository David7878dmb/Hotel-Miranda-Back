import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connectToDB = async () => {
  try {
    const pool = await mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || 'hotelmiranda',
      waitForConnections: true,
      connectionLimit: 10,  
      queueLimit: 0  
    });
    
    console.log('MySQL pool connected successfully');
    return pool; 
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    throw error;
  }
};
