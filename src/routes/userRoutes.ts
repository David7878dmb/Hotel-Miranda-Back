import { Router } from "express";
import { userController } from '../controllers/usersControllers';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', userController.getAllUser);

//Habitacion por id
router.get('/:id', userController.getUserById);

//Crear habitacion
router.post('/', userController.createUser);

//Actualizar habitación por ID
router.put('/:id', userController.updateUser);

//Eliminar habitacion por iD
router.delete('/:id', userController.delateUser);

export default router;