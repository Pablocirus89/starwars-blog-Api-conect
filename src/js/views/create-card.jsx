import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CrearPersonaje } from "../component/crear-personaje.jsx";
import { CrearPlaneta } from "../component/crear-planeta.jsx";


export const CreateCard = () => {

	return (
		<div className="container text-center">
			<div className="mb-5">
				<CrearPersonaje />
			</div>
			<div className="mb-5">
				<CrearPlaneta />
			</div>
		</div>

	)
};