const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: null,
			access_token: null,
			errorMessage: null,
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: async (datos) => {
				try {
					// Realizar la solicitud al backend
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: 'POST',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					// Obtener los datos de la respuesta
					const data = await response.json();

					if (response.ok) {
						const { access_token, currentUser } = data;

						// Guardar en el store
						setStore({ currentUser, access_token, errorMessage: null });

						// Guardar en el navegador
						sessionStorage.setItem('access_token', access_token);
						sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

						return { status: 'success' };
					} else {
						// Si el servidor respondió con un error
						setStore({ errorMessage: data.message || 'Error al iniciar sesión' });
						return { status: 'error', message: data.message };
					}
				} catch (error) {
					// Manejo de errores de red u otros
					console.error('Error en la solicitud de login:', error);
					setStore({ errorMessage: 'Error en la solicitud. Inténtalo de nuevo más tarde.' });
					return { status: 'error', message: 'Error en la solicitud. Inténtalo de nuevo más tarde.' };
				}
			},

			logout: () => {
				// Limpiar el store y el almacenamiento del navegador
				setStore({ currentUser: null, access_token: null });
				sessionStorage.removeItem('access_token');
				sessionStorage.removeItem('currentUser');
			},

			checkCurrentUser: () => {
				console.log("Verificando usuario")
				if (sessionStorage.getItem('access_token')) {
					setStore({
						access_token: sessionStorage.getItem('access_token'),
						currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
					})
				}
			},


		}
	};
};

export default getState;
