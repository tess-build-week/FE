import React from 'react'



function Stars(props){
    return(
        <div className ="StarCard">
            <div className = "StarInfo">
                <p><strong>Name:</strong>{props.star.name}</p>
                <p><strong>Radius:</strong>{props.star.radius}</p>
                <p><strong>Lumosity:</strong>{props.star.lumosity}</p>
                <p><strong>Light Color:</strong>{props.star.starcolor}</p>
                <p><strong>Mass:</strong>{props.star.mass}</p>
                <p><strong>How Many Light years away:</strong>{props.star.distance}</p>
            </div>
        </div>
    )
}
export default Planets;