import { Request, Response, NextFunction } from 'express-serve-static-core';
import jwt from 'jsonwebtoken';

// Clave secreta que debes almacenar en un archivo .env
const JWT_SECRET = process.env.JWT_SECRET || '1234';

// Middleware de autenticación
export const authMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    //Obtener token de la cabecera
    const token = req.header('Authorization')?.split('')[1];

    if (!token){
        return res.status(401).json({message: 'Access denied. No token provided.'})
    }

    try {
        //verificar token
        const decoded = jwt.verify(token, JWT_SECRET);
        (req as any).user = decoded; 
        next();
    }   catch (err) {
        res.status(400).json({message: 'Invalid Token'});
    }
}