import { Router } from "express";
import { roomController } from '../controllers/roomsController';
import { authMiddleware } from '../middelware/auth';

const router = Router();

// Obtener todas las habitaciones 
router.get('/', authMiddleware, roomController.getAllRooms);

// Obtener una habitación por ID
router.get('/:id', authMiddleware, roomController.getRoomById);

// Crear una nueva habitación
router.post('/', authMiddleware, roomController.createRoom);

// Actualizar una habitación por ID
router.put('/:id', authMiddleware, roomController.updateRoom);

// Eliminar una habitación por ID
router.delete('/:id', authMiddleware, roomController.deleteRoom);

export default router;
