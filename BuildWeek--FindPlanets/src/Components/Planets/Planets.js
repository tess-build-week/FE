import React from 'react';



function Planets(props){
    return(
        <div className ="PlanetsCard">
            <div className = "PlanetInfo">
                <p><strong>Name: </strong>{props.planet.planetid}</p>
                <p><strong>orbit_period: </strong>{props.planet.orbit_period}</p>
                <p><strong>Star Tess ID: </strong>{props.planet.star_tessid}</p>
                <p><strong>radius: </strong>{props.planet.planet_radius}</p>
                
            </div>
        </div>
    )
}
export default Planets;