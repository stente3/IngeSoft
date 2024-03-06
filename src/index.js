// Importa la configuración del paquete 'dotenv' para cargar las variables de entorno desde el archivo .env
import 'dotenv/config';
// Importa la función connectDB desde el archivo db.js
import { connectDB } from './db.js';
import app from './app.js';

// Obtiene el valor de la variable de entorno PORT y lo asigna a la constante 'port'
const port = process.env.PORT;

// Llama a la función connectDB para establecer la conexión a la base de datos
connectDB();

// Hace que la aplicación escuche en el puerto especificado y muestra un mensaje en la consola cuando la aplicación se inicia correctamente
app.listen(port, () => {
	console.log(`Running in port ${port}`);
});
