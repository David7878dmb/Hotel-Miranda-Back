import { Router } from "express";
import { userController } from '../controllers/usersControllers';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, userController.getAllUser);

//Habitacion por id
router.get('/:id', authMiddleware, userController.getUserById);

//Crear habitacion
router.post('/', authMiddleware, userController.createUser);

//Actualizar habitación por ID
router.put('/:id', authMiddleware, userController.updateUser);

//Eliminar habitacion por iD
router.delete('/:id', authMiddleware, userController.delateUser);

export default router;