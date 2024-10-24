import { Router } from "express";
import { roomController } from '../controllers/roomsController';
import { authMiddleware } from '../middelware/auth';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

// Rutas de habitaciones
router.get('/', authMiddleware, asyncHandler(roomController.getAllRooms));
router.get('/:id', authMiddleware, asyncHandler(roomController.getRoomById));
router.post('/', authMiddleware, asyncHandler(roomController.createRoom));
router.put('/:id', authMiddleware, asyncHandler(roomController.updateRoom));
router.delete('/:id', authMiddleware, asyncHandler(roomController.deleteRoom));

export default router;
