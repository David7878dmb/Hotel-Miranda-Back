import { Router } from "express";
import { roomController } from '../controllers/roomsController';
import { authMiddleware } from '../middelware/auth';

const router = Router();

//Todas las habitaciones 
router.get('/', authMiddleware, roomController.getAllRooms);

//Habitacion por id
//router.get('/:id', authMiddleware, roomController.getRoomById);

//Crear habitacion
/*router.post('/', authMiddleware, roomController.createRoom);

//Actualizar habitación por ID
router.put('/:id', authMiddleware, roomController.updateRoom);

//Eliminar habitacion por iD
router.delete('/:id', authMiddleware, roomController.deleteRoom);
*/
export default router;