import React from "react";
import ReactDOM from 'react-dom';
import styledComponents from 'styledcomponents';
const TopnavStyles = styled.nav`
display:flex;
flex-direction: rows;

`;
const listStyles = styled.li `
text-decoration:none;
display:flex;
justify-content:space-around;
`;

    

function Topnav(){
    return(
<div>
<nav>
    <li><a>Planets</a></li>
    
    
    
</nav>
</div>
    );

};
export default Topnav;
