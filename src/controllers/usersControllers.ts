import { Request, Response } from 'express';
import { UserService } from '../services/usersService';
import { connectToDB } from '../utils/connectionSQL';

// Inicializar UserService con la conexión a la base de datos
let userService: UserService;

export const initializeUserService = async () => {
  const db = await connectToDB();
  userService = new UserService(db);
};

initializeUserService();

export const userController = {

  
  // Obtener todos los usuarios
  getAllUsers : async (req: Request, res: Response) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
  // Obtener usuario por ID
  getUserById : async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(Number(id));
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


 createUser : async (req: Request, res: Response) => {
   try {
     const newUser = req.body;
     await userService.createUser(newUser);
     res.status(201).json({ message: 'User created successfully' });
   } catch (error) {
     console.error('Error creating user:', error);
     res.status(500).json({ error: 'Internal server error' });
   }
 },

// Actualizar un usuario por ID
 updateUser : async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    await userService.updateUser(Number(id), updatedData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// Eliminar un usuario por ID
 deleteUser : async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await userService.deleteUser(Number(id));
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
}