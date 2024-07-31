import React from "react";
import { ContenedorPersonajes } from "./contenedor-personajes.jsx";
import { ContenedorPlanetas } from "./contenedor-planetas.jsx"


export const Home = () => {




	return (
			
			<div className="container-fluid bg-black">
				{/* <img src="https://i.pinimg.com/originals/c1/ff/f2/c1fff28a143cc9192e8d5d0f646f5126.jpg" alt="Fondo Sitio" className="z-n1 object-fit-none border rounded position-absolute" /> */}
				<ContenedorPersonajes />
				<ContenedorPlanetas />
			</div>

	)

};
