import { Router } from "express";
import { roomsController } from '../controllers/roomsController';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, roomsController.getAllRooms);

//Habitacion por id
router.get('/:id', authMiddleware, roomsController.getRoomById);

//Crear habitacion
router.get('/', authMiddleware, roomsController.createRoom);

//Actualizar habitación por ID
router.get('/:id', authMiddleware, roomsController.updateRoom);

//Eliminar habitacion por iD
router.get('/:id', authMiddleware, roomsController.delateRoom);

export default router;