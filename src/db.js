// Importa la configuración del paquete 'dotenv' para cargar las variables de entorno desde el archivo .env
import 'dotenv/config';
// Importar la biblioteca Mongoose para la conexión con MongoDB
import mongoose from 'mongoose';

// Función asincrónica para conectar a la base de datos
export const connectDB = async () => {
	try {
		// Intentar conectar a la base de datos MongoDB en la URL proporcionada
		await mongoose.connect(process.env.DB_URI);

		// Imprimir en la consola si la conexión fue exitosa
		console.log('DB connected');
	} catch (error) {
		// Capturar cualquier error durante la conexión y mostrarlo en la consola
		console.log(error);
	}
};
