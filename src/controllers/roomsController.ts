import { Request, Response } from 'express';
import RoomService from '../services/roomServices';

const roomService = new RoomService();

export const roomController = {
    // Obtener todas las habitaciones
    getAllRooms: async (req: Request, res: Response) => {
        try {
            const rooms = await roomService.getAll();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching rooms' });
        }
    },

    // Obtener una habitación por ID
    getRoomById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const room = await roomService.getByID(id);
            if (!room) {
                res.status(404).json({ message: 'Room not found' });
            } else {
                res.json(room);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching room' });
        }
    },

    // Crear una nueva habitación
    createRoom: async (req: Request, res: Response) => {
        try {
            const newRoom = await roomService.create(req.body);
            res.status(201).json(newRoom);
        } catch (error) {
            res.status(500).json({ message: 'Error creating room' });
        }
    },

    // Actualizar una habitación existente por ID
    updateRoom: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const updatedRoom = await roomService.update(id, req.body);
            if (!updatedRoom) {
                res.status(404).json({ message: 'Room not found or not updated' });
            } else {
                res.json(updatedRoom);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating room' });
        }
    },

    // Eliminar una habitación por ID
    deleteRoom: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const deleted = await roomService.remove(id);
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
