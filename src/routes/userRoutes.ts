import { Router } from "express";
import { usersController } from '../controllers/usersControllers';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, usersController.getAllUsers);

//Habitacion por id
router.get('/:id', authMiddleware, usersController.getUsersById);

//Crear habitacion
router.get('/', authMiddleware, usersController.createUsers);

//Actualizar habitación por ID
router.get('/:id', authMiddleware, usersController.updateUsers);

//Eliminar habitacion por iD
router.get('/:id', authMiddleware, usersController.delateUsers);

export default router;