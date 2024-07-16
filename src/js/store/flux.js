const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			 planets: [],

		},
		actions: {

			obtenerPersonajes: async () => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ characters: data.results })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch(`https://swapi.dev/api/planets/`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ planets: data.results })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			
		},
	}
};


export default getState;
