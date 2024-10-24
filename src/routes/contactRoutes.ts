import { Router } from "express";
import { contactController } from '../controllers/contactControllers';
import { authMiddleware } from '../middelware/auth';
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// Rutas de contactos protegidas por el middleware de autenticación
router.get('/', authMiddleware, asyncHandler(contactController.getAllContact));
router.get('/:id', authMiddleware,asyncHandler (contactController.getContactById));
router.post('/', authMiddleware, asyncHandler (contactController.createContact));
router.put('/:id', authMiddleware, asyncHandler(contactController.updateContact));
router.delete('/:id', authMiddleware, asyncHandler(contactController.deleteContact));

export default router;
