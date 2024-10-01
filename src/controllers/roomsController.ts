import { Request, Response } from 'express';
import { roomService } from '../services/roomServices';

export const roomController = {
    getAllRoom: async (req: Request, res: Response) => {
        try {
            const rooms = await roomService.fetchAll();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching rooms' });
        }
    },

    getRoomsById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const room = await roomService.fetchOne(id);
            if (!room) {
                res.status(404).json({ message: 'Room not found' });
            } else {
                res.json(room);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching room' });
        }
    },

    createRoom: async (req: Request, res: Response) => {
        try {
            const newRoom = await roomService.create(req.body);
            res.status(201).json(newRoom);
        } catch (error) {
            res.status(500).json({ message: 'Error creating Room' });
        }
    },

    updateRoom: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updatedRoom = await roomService.update(id, req.body);
            res.json(updatedRoom);
        } catch (error) {
            res.status(500).json({ message: 'Error updating Room' });
        }
    },

    delateRoom: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await roomService.delete(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting Room' });
        }
    }
};
