import { Request, Response } from 'express';
import {RoomService} from '../services/roomServices';
import { connectToDB } from '../utils/connectionSQL'; // Asumiendo que conectas a una base de datos SQL como en el caso de users

// Inicializar RoomService con la conexión a la base de datos
let roomService: RoomService;

export const initializeRoomService = async () => {
  const db = await connectToDB();
  roomService = new RoomService(db); // Pasamos la conexión a la base de datos
};

initializeRoomService();

export const roomController = {
  
  // Obtener todas las habitaciones
  getAllRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomService.getAllRooms();
      res.status(200).json(rooms);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Obtener una habitación por ID
  getRoomById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const room = await roomService.getRoomById(Number(id));
      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }
      res.status(200).json(room);
    } catch (error) {
      console.error('Error fetching room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Crear una nueva habitación
  createRoom: async (req: Request, res: Response) => {
    try {
      const newRoom = req.body;
      await roomService.createRoom(newRoom);
      res.status(201).json({ message: 'Room created successfully' });
    } catch (error) {
      console.error('Error creating room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Actualizar una habitación por ID
  updateRoom: async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      await roomService.updateRoom(Number(id), updatedData);
      res.status(200).json({ message: 'Room updated successfully' });
    } catch (error) {
      console.error('Error updating room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Eliminar una habitación por ID
  deleteRoom: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await roomService.deleteRoom(Number(id));
      res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
      console.error('Error deleting room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
