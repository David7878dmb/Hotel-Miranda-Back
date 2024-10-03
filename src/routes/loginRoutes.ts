import { Router } from "express";
import { loginController } from '../login/login';
const router = Router();

router.post('/', loginController);

export default router;