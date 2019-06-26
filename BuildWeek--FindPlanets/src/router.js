 import React from 'react';
 import { Switch, Route } from 'react-router-dom';
 import App from './App';
 import StarsApp from './Components/Stars/StarsApp';

//Import all my components up here

 const router = () => (
<Switch>
   <Route exact path="/" component={Login}/>
     <PrivateRoute exact path="/Home" component={App}/>
   
</Switch>

);

 export default router;