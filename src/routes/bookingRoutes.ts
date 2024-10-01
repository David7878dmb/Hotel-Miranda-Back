import { Router } from "express";
import { bookingsController } from '../controllers/bookingControllers';
import { authMiddleware } from '../middleware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, bookingsController.getAllRooms);

//Habitacion por id
router.get('/:id', authMiddleware, bookingsController.getRoomById);

//Crear habitacion
router.get('/', authMiddleware, bookingsController.createRoom);

//Actualizar habitación por ID
router.get('/:id', authMiddleware, bookingsController.updateRoom);

//Eliminar habitacion por iD
router.get('/:id', authMiddleware, bookingsController.delateRoom);

export default router;