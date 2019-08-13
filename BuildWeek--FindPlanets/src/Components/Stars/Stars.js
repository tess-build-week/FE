import React from 'react'



 function Stars(props){
     return(
         <div className ="StarCard">
             <div className = "StarInfo">
                 <p><strong>Constellation: </strong>{props.star.constellation}</p>
                 <p><strong>Star mass: </strong>{props.star.star_mass}</p>
                 <p><strong>Star radius: </strong>{props.star.star_radius}</p>
                <p><strong>Sector: </strong>{props.star.sector}</p>
                 <p><strong>two mass:</strong>{props.star.twomass}</p>
                
            </div>
         </div>
     )
 }
 export default Stars;