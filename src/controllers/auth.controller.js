// Importa el modelo de usuario desde el archivo User.js ubicado en el directorio '../models/'
import User from '../models/User.js';

// Controlador para el registro de nuevos usuarios
export const register = async (req, res) => {
	// Extrae las propiedades 'username', 'email', y 'password' del cuerpo de la solicitud (req.body)
	const { username, email, password } = req.body;
	try {
		// Crea una nueva instancia del modelo User con los datos proporcionados
		const newUser = new User({
			username,
			email,
			password,
		});

		// Guarda el nuevo usuario en la base de datos mediante el método save() asincrónico
		await newUser.save();

		// Envía una respuesta exitosa al cliente indicando que el registro se ha completado
		res.send('Register done!');
	} catch (error) {
		// En caso de error, registra el error en la consola para su posterior análisis
		console.log(error);
	}
};
