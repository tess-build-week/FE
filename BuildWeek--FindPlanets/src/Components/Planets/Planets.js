import React from 'react';



function Planets(props){
    return(
        <div className ="PlanetsCard">
            <div className = "PlanetInfo">
                <p><strong>Name:</strong>{props.planet.planetid}</p>
                <p><strong>orbit_period:</strong>{props.planet.orbit_period}</p>
                <p><strong>Mass</strong>{props.planet.mass}</p>
                <p><strong>radius:</strong>{props.planet.planet_radius}</p> 
            </div>
        </div>
    )
}
export default Planets;