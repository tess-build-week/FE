import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// import withAuth from './Components/Login/withAuth';
// import Secret from './Components/Login/Secret';
// import Login from './Components/Login/login';
import RenderPlanets from './RenderPlanets';
import StarsApp from "./Components/Stars/StarsApp";

export default class App extends Component {
  render() {
    console.log("inside App Render")
    return (
      <div>
        
       <ul>
          
          <li><Link to="/Planets">Planets</Link></li>
          <li><Link to="/Stars">Stars</Link></li>
        </ul>

        <Switch>
          
           {/* <Route path="/secret" component={withAuth(Secret)} /> */}
     <Route exact path="/Planets" component={RenderPlanets}/>
      <Route exact path="/Stars" component={StarsApp}/> 
   

          {/* <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} /> */}
        </Switch> 
      </div>
    );
  }
}
