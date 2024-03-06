// Importa la biblioteca mongoose para interactuar con MongoDB
import mongoose from 'mongoose';

// Define el esquema de datos para el modelo de usuario
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true, // Es obligatorio tener un nombre de usuario
		trim: true, // Elimina espacios en blanco al principio y al final del nombre de usuario
	},
	email: {
		type: String,
		required: true, // Es obligatorio tener una dirección de correo electrónico
		trim: true, // Elimina espacios en blanco al principio y al final del correo electrónico
		unique: true, // Asegura que cada dirección de correo electrónico sea única en la base de datos
	},
	password: {
		type: String,
		required: true, // Es obligatorio tener una contraseña
	},
});

// Exporta el modelo de usuario basado en el esquema definido
export default mongoose.model('User', userSchema);
