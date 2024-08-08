import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			planets: [],
			character: {},
			planet: {},
			favoritesList: [],

		},
		actions: {

			crearPersonaje: async (name, gender, eye_color) => {
				try {
					const response = await axios.post(process.env.BACKEND_URL+'/new_character', {
						"name": name,
						"gender": gender,
						"eye_color": eye_color
					})
					alert(response.data)
					

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			crearPlaneta: async (name, population, diameter) => {
				try {
					const response = await axios.post(process.env.BACKEND_URL+'/new_character', {
						"name": name,
						"population": population,
						"diameter": diameter
					})

					setStore(response.data.planets)

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPersonajes: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL+'/all_characters', {
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
					const response = await fetch(process.env.BACKEND_URL+'/all_planets', {
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

			obtenerPersonajeDetails: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/${id}`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ character: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPlanetaDetails: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
						method: `GET`,
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ planet: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			agregarFavoritesList: (name) => {
				if (getStore().favoritesList.includes(name)) {
					getActions().eliminarFavorite(name)
				} else {
					setStore({ favoritesList: [...getStore().favoritesList, name] });
				}
			},
			eliminarFavorite: (name) => {
				const newList = getStore().favoritesList.filter((item) => item != name)
				setStore({ favoritesList: newList })
			}
		}
	};
};


export default getState;
