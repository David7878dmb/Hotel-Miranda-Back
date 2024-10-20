import { Router } from "express";
import { bookingController } from '../controllers/bookingControllers';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', bookingController.getAllBooking);

//Habitacion por id
router.get('/:id', bookingController.getBookingById);

//Crear habitacion
router.get('/', bookingController.createBooking);

//Actualizar habitación por ID
router.get('/:id', bookingController.updateBooking);

//Eliminar habitacion por iD
router.get('/:id', bookingController.delateBooking);

export default router;