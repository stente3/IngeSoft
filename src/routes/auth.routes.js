// Importa el módulo Router de Express para gestionar las rutas
import { Router } from 'express';

// Importa las funciones de controlador necesarias desde el archivo auth.controller.js
import { register } from '../controllers/auth.controller.js';

const router = Router();
router.post('/register', register);

// Exporta el router para que pueda ser utilizado en otros archivos
export default router;
