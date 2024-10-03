import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

//Usuario Harcored  
export interface UserHardcore  {
    username: string,
    password: string
}
const hardcodedUser: UserHardcore = {
    username: 'admin',
    password: '1234',
  };

// Controlador para manejar el login
export const loginController = (req: Request, res: Response) => {
    const { username, password } = req.body;

    console.log(req.body);
    // Verificar que las credenciales coinciden con el usuario hardcoded
    if (username === hardcodedUser.username && password === hardcodedUser.password){
        // Crear un token JWT que expire en 1 hora
        const token = jwt.sign({username: hardcodedUser.username},JWT_SECRET, {expiresIn: '24h' });
        

          // Configurar opciones para la cookie (httpOnly por seguridad)
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000,
        };

        // Enviar la cookie con el token
        res.cookie('token', token, cookieOptions);

        //Devolvemos el token al cliente
        res.json({ token });
    } else {
        //Credenciales invalidas
        res.status(401).json({message: "Invalid Credentials"});
    }
};
