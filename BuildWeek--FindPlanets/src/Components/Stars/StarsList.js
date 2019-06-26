import React from 'react';
import Stars from 'Stars.js'
import "./Stars.css";

function PlanetList(props){
    return (
        <div className = "planetList-wrapper">
{props.tessStars.map(Stars => {
    return <Planets star ={Stars}/> 
})}

        </div>
    )
}
export default PlanetList;