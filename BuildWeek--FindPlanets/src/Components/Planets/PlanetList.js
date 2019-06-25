import React from './node_modules/react';
import Planets from './node_modules/Planets.js.js'
import "./Planets.css";

function PlanetList(props){
    return (
        <div className = "planetList-wrapper">
{props.tessplanet.map(planet => {
    return <Planets planet ={planet}/> 
})}

        </div>
    )
}
export default PlanetList;