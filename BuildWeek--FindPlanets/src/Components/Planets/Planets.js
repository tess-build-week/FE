import React from 'react';



function Planets(props){
    return(
        <div className ="PlanetsCard">
            <div className = "PlanetInfo">
                <p><strong>Name:</strong>{props.planet.name}</p>
                <p><strong>Distance from Earth:</strong>{props.planet.distance}</p>
                <p><strong>Lumosity:</strong>{props.planet.lumosity}</p>
                <p><strong>Spectrum:</strong>{props.planet.spectrum}</p>
                <p><strong>Metallicity:</strong>{props.planet.metallicity}</p>
                <p><strong>Variablity:</strong>{props.planet.variablity}</p>
            </div>
        </div>
    )
}
export default Planets;