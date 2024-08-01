const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},


			login: async (datos) => {
				try {
					// fetching data from the backend
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: 'POST',
						body: JSON.stringify(datos),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await response.json()

					//console.log(data)
					const { access_token, currentUser, status, message } = data

					// guardando en el store
					setStore({ currentUser, access_token })

					// guardando en el navegador
					sessionStorage.setItem('access_token', access_token)
					sessionStorage.setItem('currentUser', JSON.stringify(currentUser))

					return { status, message }

				} catch (error) {
					console.log(error)
				}
			},





			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
