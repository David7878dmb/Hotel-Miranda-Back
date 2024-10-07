import { Request, Response, NextFunction } from 'express-serve-static-core';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Clave secreta almacenada en el archivo .env
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Usuario hardcoded
const hardcodedUser = {
    username: 'admin',
    password: '1234'  
};

// Middleware de autenticación
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    // Obtener token de la cabecera
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Access denied. No token provided.' });
        return;
    }
    
    try {
        // Verificar el token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Verificar si decoded es de tipo JwtPayload y contiene el username
        if (typeof decoded === 'object' && (decoded as JwtPayload).username) {
            // Verificar el usuario "hardcoded"
            if ((decoded as JwtPayload).username !== hardcodedUser.username) {
                res.status(401).json({ message: 'Access denied. Invalid user.' });
                return;
            }

            // Si el usuario es válido, continuar
            (req as any).user = decoded;
            next();
        } else {
            res.status(401).json({ message: 'Invalid token structure' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
        return;
    }
};
