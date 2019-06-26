import React from 'react';
import Planets from './Planets'
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