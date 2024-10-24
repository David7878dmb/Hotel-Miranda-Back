import { Router } from "express";
import { userController } from '../controllers/usersControllers';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

// Rutas de usuario
router.get('/', asyncHandler(userController.getAllUsers));
router.get('/:id', asyncHandler(userController.getUserById));
router.post('/', asyncHandler(userController.createUser));
router.put('/:id', asyncHandler(userController.updateUser));
router.delete('/:id', asyncHandler(userController.deleteUser));

export default router;
