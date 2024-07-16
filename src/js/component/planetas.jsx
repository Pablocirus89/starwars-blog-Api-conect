import React from "react";

export const Planetas = ({ name, population, terrain, id }) => {

    return (
        <div className="text-center m-2">
            <div className="row">
                <div className="col-3">
                    <div className="card" style={{ width: "18rem", flex:"none", margin:"10px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>                           
                            <p className="card-text">Population: {population}</p>
                            <p className="card-text">Terraian: {terrain}</p>
                            <a href="" className="btn btn-primary">Learn more!</a>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};