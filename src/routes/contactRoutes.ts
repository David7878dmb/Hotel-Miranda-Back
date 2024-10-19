import { Router } from "express";
import { contactController } from '../controllers/contactControllers'; 
import { authMiddleware } from '../middelware/auth';  

const router = Router();

// Obtener todos los contactos
router.get('/', authMiddleware, contactController.getAllContact);

// Obtener un contacto por ID
//router.get('/:id', authMiddleware, contactController.getContactById);

// Crear un nuevo contacto
/*router.post('/', authMiddleware, contactController.createContact); 

// Actualizar contacto por ID
router.put('/:id', authMiddleware, contactController.updateContact); 

// Eliminar contacto por ID
router.delete('/:id', authMiddleware, contactController.deleteContact);
*/
export default router;
