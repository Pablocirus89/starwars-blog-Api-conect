import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Personajes } from "./component/personajes.jsx"
import { Planetas } from "./component/planetas.jsx";
import { PersonajesDetails } from "./views/personajes-details.jsx";
import { PlanetDetails } from "./views/planet-details.jsx";
import { CreateCard } from "./views/create-card.jsx";
import { CrearPersonaje } from "./component/crear-personaje.jsx";
import { CrearPlaneta } from "./component/crear-planeta.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes-details/:id" element={<PersonajesDetails />} />
						<Route path="/planet-details/:id" element={<PlanetDetails />} />
						<Route path="/create-card" element={<CreateCard />} />
						<Route path="/crear-personaje" element={<CrearPersonaje />} />
						<Route path="/crear-planeta" element={<CrearPlaneta />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
