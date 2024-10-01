import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '1234';

//Usuario Harcored

const hardcodedUser = {
    username: 'admin',
    password: '1234',
  };

// Controlador para manejar el login
export const loginController = (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Verificar que las credenciales coinciden con el usuario hardcoded
    if (username === hardcodedUser.username && password === hardcodedUser.password){
        // Crear un token JWT que expire en 1 hora
        const token = jwt.sign({username: hardcodedUser.username},JWT_SECRET, {expiresIn: '1h' });
    
        //Devolvemos el token al cliente
        res.json({ token });
    } else {
        //Credenciales invalidas
        res.status(401).json({message: "Invalid Credentials"});
    }
};