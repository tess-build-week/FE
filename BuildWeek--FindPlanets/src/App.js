import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './Components/Login/withAuth';
import Secret from './Components/Login/Secret';
import Login from './Components/Login/login';
import renderPlanets from './renderPlanets';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Switch>
          <Route path="/" exact component={renderPlanets} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}