import React from 'react';
import Stars from './Stars'
 import "./Stars.css";

function StarsList(props){
    return (
        <div className = "starList-wrapper">
{props.tessStars.map(ele => {
     return <Stars star ={ele}/> 
 })}

        </div>
    )
}
export default StarsList;
