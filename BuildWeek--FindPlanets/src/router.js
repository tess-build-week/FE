 import React from 'react';
 import { Switch, Route } from 'react-router-dom';
 import App from './App';
 import StarsApp from './Components/Stars/StarsApp';
 import login from './Components/Login/login';

//Import all my components up here

 const router = () => (
<Switch>
   <Route exact path="/" component={login}/>
   <Route path="/secret" component={withAuth(Secret)} />
     <Route exact path="/Home" component={App}/>
   
</Switch>

);

 export default router;