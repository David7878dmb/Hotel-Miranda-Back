import { Router } from "express";
import { bookingsController } from '../controllers/bookingControllers';
import { authMiddleware } from '../middleware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, bookingsController.getAllBookings);

//Habitacion por id
router.get('/:id', authMiddleware, bookingsController.getBookingsById);

//Crear habitacion
router.get('/', authMiddleware, bookingsController.createBookings);

//Actualizar habitación por ID
router.get('/:id', authMiddleware, bookingsController.updateBookings);

//Eliminar habitacion por iD
router.get('/:id', authMiddleware, bookingsController.delateBookings);

export default router;