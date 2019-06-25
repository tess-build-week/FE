 import React from 'react';
 import { Switch, Route } from 'react-router-dom';
 import App from './App';
 import StarsApp from './Components/Stars/StarsApp';

//Import all my components up here

 const router = () => (
<Switch>
   <Route exact path="/" component={App}/>
     <Route path="/Stars" component={theTeam}/>
   
</Switch>

);

 export default router;