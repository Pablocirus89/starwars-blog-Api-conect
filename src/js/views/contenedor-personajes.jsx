import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.jsx";


export const ContenedorPersonajes = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    console.log(store.characters);
    return (
        <div className="text-center mt-3">
            <div>
                <h1 className="border border-warning z-3 position-absolute">Characters</h1>
            </div>
            <div className="card-group z-3">
                <div className="d-flex flex-row overflow-scroll">

                    {store.characters.map((item, index) => (
                        <Personajes
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            hair_color={item.hair_color}
                            eye_color={item.eye_color}
                            id={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

};
