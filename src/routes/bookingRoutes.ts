import { Router } from "express";
import { bookingController } from '../controllers/bookingControllers';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, bookingController.getAllBooking);

//Habitacion por id
//router.get('/:id', authMiddleware, bookingController.getBookingById);

//Crear habitacion
router.get('/', authMiddleware, bookingController.createBooking);

//Actualizar habitación por ID
router.get('/:id', authMiddleware, bookingController.updateBooking);

//Eliminar habitacion por iD
router.get('/:id', authMiddleware, bookingController.delateBooking);

export default router;