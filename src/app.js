// Importamos las bibliotecas necesarias para construir nuestra aplicación Express
import express from 'express'; // Express es un marco de aplicación web para Node.js
import morgan from 'morgan'; // Morgan es un middleware para el registro de solicitudes HTTP
import cors from 'cors'; // Cors permite solicitudes desde otros dominios/servidores

// Importamos las rutas de autenticación desde el archivo correspondiente
import authRoutes from './routes/auth.routes.js';

// Creamos una instancia de la aplicación Express
const app = express();

// Configuramos middleware para permitir solicitudes desde cualquier origen (CORS)
app.use(cors());

// Configuramos middleware de registro de solicitudes HTTP en modo "dev"
app.use(morgan('dev'));

// Configuramos middleware para el manejo de datos JSON en las solicitudes
app.use(express.json());

// Configuramos las rutas de autenticación bajo la ruta base "/api"
app.use('/api', authRoutes);

// Exportamos la aplicación Express configurada
export default app;
