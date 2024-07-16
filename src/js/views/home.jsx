import React from "react";
import { ContenedorPersonajes } from "./contenedor-personajes.jsx";
import { ContenedorPlanetas } from "./contenedor-planetas.jsx"


export const Home = () => {

	

	
	return (
		<div className="container-fluid">
			<ContenedorPersonajes/>
			<ContenedorPlanetas/>
		</div>
		
	)

};
