const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			currentUser: null,
			access_token: null,
			errorMessage: null,
			paymentMethods: []

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

			registro: async (datos) => {
				try {
					// Realizar la solicitud al backend
					const response = await fetch(process.env.BACKEND_URL + "/api/registro", {
						method: 'POST',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					// Obtener los datos de la respuesta
					const data = await response.json();

					if (response.ok) {

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

			perfil: async (datos) => {
				try {
					// Realizar la solicitud al backend
					const response = await fetch(process.env.BACKEND_URL + "/api/userProfile", {
						method: 'GET',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${access_token}`
						}
					})
					const datos = await response.json()
					setStore({ profile: datos })

				} catch (error) {

					console.log(error)
				}
			},

			UpdatePerfil: async (datos) => {
				try {
					// Realizar la solicitud al backend
					const response = await fetch(process.env.BACKEND_URL + "/api/userProfile", {
						method: 'PUT',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${access_token}`
						}
					})
					const datos = await response.json()
					setStore({ profile: datos })

				} catch (error) {
					console.log(error)
				}
			},

			createPaymentMethod: async (datos) => {
				try {
					const store = getStore();
					const response = await fetch(process.env.BACKEND_URL + "/api/paymentMethod", {
						method: 'POST',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.access_token}`
						}
					});

					const data = await response.json();

					if (response.ok) {
						// Actualizar el store con el nuevo método de pago
						setStore({ paymentMethods: [...store.paymentMethods, data] });
						return { status: 'success', message: 'Método de pago creado exitosamente' };
					} else {
						return { status: 'error', message: data.message };
					}
				} catch (error) {
					console.error('Error al crear método de pago:', error);
					return { status: 'error', message: 'Error al crear método de pago. Inténtalo de nuevo más tarde.' };
				}
			},

			updatePaymentMethod: async (id, datos) => {
				try {
					const store = getStore();
					const response = await fetch(`${process.env.BACKEND_URL}/api/paymentMethod/${id}`, {
						method: 'PUT',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${store.access_token}`
						}
					});

					const data = await response.json();

					if (response.ok) {
						// Actualizar el store con el método de pago actualizado
						setStore({ paymentMethods: store.paymentMethods.map(pm => pm.id === id ? data : pm) });
						return { status: 'success', message: 'Método de pago actualizado exitosamente' };
					} else {
						return { status: 'error', message: data.message };
					}
				} catch (error) {
					console.error('Error al actualizar método de pago:', error);
					return { status: 'error', message: 'Error al actualizar método de pago. Inténtalo de nuevo más tarde.' };
				}
			},

			deletePaymentMethod: async (id) => {
				try {
					const store = getStore();
					const response = await fetch(`${process.env.BACKEND_URL}/api/paymentMethod/${id}`, {
						method: 'DELETE',
						headers: {
							'Authorization': `Bearer ${store.access_token}`
						}
					});

					if (response.ok) {
						// Actualizar el store removiendo el método de pago eliminado
						setStore({ paymentMethods: store.paymentMethods.filter(pm => pm.id !== id) });
						return { status: 'success', message: 'Método de pago eliminado exitosamente' };
					} else {
						const data = await response.json();
						return { status: 'error', message: data.message };
					}
				} catch (error) {
					console.error('Error al eliminar método de pago:', error);
					return { status: 'error', message: 'Error al eliminar método de pago. Inténtalo de nuevo más tarde.' };
				}
			},

			getAllPaymentMethods: async () => {
				try {
					const store = getStore();
					const response = await fetch(process.env.BACKEND_URL + "/api/paymentMethod", {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${store.access_token}`
						}
					});

					const data = await response.json();

					if (response.ok) {
						setStore({ paymentMethods: data });
					} else {
						console.error('Error al obtener métodos de pago:', data.message);
					}
				} catch (error) {
					console.error('Error al obtener métodos de pago:', error);
				}
			}
		},
	};
};

export default getState;
