import { Request, Response } from 'express';
import RoomService from '../services/roomServices';

const roomService = new RoomService();

export const roomController = {
    getAllRooms: async (req: Request, res: Response) => {
        try {
            const rooms = await roomService.getAll();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching rooms' });
        }
    },

    getRoomById: async (req: Request, res: Response) => {
        try {
            const room = await roomService.getByID(+req.params.id);
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
            res.status(500).json({ message: 'Error creating room' });
        }
    },

    updateRoom: async (req: Request, res: Response) => {
        try {
            const updatedRoom = await roomService.update(+req.params.id, req.body);
            res.json(updatedRoom);
        } catch (error) {
            res.status(500).json({ message: 'Error updating room' });
        }
    },

    deleteRoom: async (req: Request, res: Response) => {
        try {
            const deleted = await roomService.remove(+req.params.id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Room not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting room' });
        }
    }
};
