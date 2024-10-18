import { Request, Response,NextFunction } from 'express';
import UserService from '../services/usersService';
import { isValidObjectId } from 'mongoose';


const userService = new UserService();

export const userController = {
    getAllUser: async (req: Request, res: Response) => {
        try {
            const User = await userService.getAll();
            res.json(User);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching User' });
        }
    },

    getUserById: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                res.status(400).json({ message: 'Invalid user ID format' });
                return;
            }
            const user = await userService.getByID(id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(user);
        } catch (error) {
            next(error);
        }
    },


    createUser: async (req: Request, res: Response) => {
        try {
            const newUser = await userService.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Error creating User' });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updatedUser = await userService.update(+id, req.body);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Error updating User' });
        }
    },

    delateUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await userService.remove(+id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting User' });
        }
    }
};
