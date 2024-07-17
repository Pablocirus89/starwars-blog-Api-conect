import React from "react";
import { Link } from "react-router-dom";

export const Planetas = ({ name, population, terrain, id }) => {

    return (
        <div className="text-center m-2">
            <div className="row">
                <div className="col-3">
                    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text">Population: {population}</p>
                            <p className="card-text">Terraian: {terrain}</p>
                            <div className="d-flex  justify-content-between">
                                <Link to={`/planet-details/${id}`}>
                                    <button className="btn btn-outline-primary float-start">
                                        Learn more!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};