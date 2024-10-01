import { Router } from "express";
import { contactController } from '../controllers/contactControllers';
import { authMiddleware } from '../middleware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, contactController.getAllContact);

//Habitacion por id
router.get('/:id', authMiddleware, contactController.getContactById);

//Crear habitacion
router.get('/', authMiddleware, contactController.createContact);

//Actualizar habitación por ID
router.get('/:id', authMiddleware, contactController.updateContact);

//Eliminar habitacion por iD
router.get('/:id', authMiddleware, contactController.delateContact);

export default router;