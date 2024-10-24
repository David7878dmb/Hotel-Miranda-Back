import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserService } from '../services/usersService';
import { connectToDB } from '../utils/connectionSQL';

let userService : UserService;

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Controlador para manejar el login
export const loginController = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    try {
        // Busca el usuario en la base de datos por nombre de usuario
        const user = await userService.getUserById(username); // Cambia aquí para usar username

        if (!user) {
            // Si no se encuentra el usuario
            res.status(401).json({ message: "Invalid user" });
            return;
        }

        // Compara la contraseña ingresada con la almacenada en la base de datos usando bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            // Si las contraseñas no coinciden
            res.status(401).json({ message: "Invalid password" });
            return;
        }

        // Si las credenciales son correctas, crea un token JWT que expire en 24 horas
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '24h' });

        // Devuelve el token al cliente
        res.json({ token });

    } catch (error) {
        // Maneja errores en la autenticación
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return ;
    }
};
