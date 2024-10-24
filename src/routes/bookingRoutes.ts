import { Router } from 'express';
import { bookingController } from '../controllers/bookingControllers';
import { authMiddleware } from '../middelware/auth';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

// Obtener todas las reservas
router.get('/', authMiddleware, asyncHandler(bookingController.getAllBooking));

// Obtener una reserva por ID
router.get('/:id', authMiddleware, asyncHandler(bookingController.getBookingById));

// Crear una nueva reserva
router.post('/', authMiddleware, asyncHandler(bookingController.createBooking));

// Actualizar una reserva por ID
router.put('/:id', authMiddleware, asyncHandler(bookingController.updateBooking));

// Eliminar una reserva por ID
router.delete('/:id', authMiddleware, asyncHandler(bookingController.deleteBooking));

export default router;
