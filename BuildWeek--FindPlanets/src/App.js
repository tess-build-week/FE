import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlanetList from './Components/Planets/PlanetList';
import Topnav from './Components/Nav/Topnav';
import Bottomnav from './Components/Nav/Bottomnav';
import {Link} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tessplanet:[]
    };
  }
    componentDidMount(){
      this.getPlanet("API Call");
    }
    getPlanet = URL => {
      axios.get("api call")
         .then(res => {
           console.log(res.data);
         })
         .catch(err =>{
           console.log(err);
         })

      // fetch(URL)
      //   axios.then(res => {
      //     return res.json();
      //   })
      //   .then(data => {
      //     this.setState({tessplanet: data.results});
      //   })
      //   .catch(err => {err
      //     throw new Error();
      //   });
    };
    render(){
      return (
         <div className="App">
            <Topnav/> 
           <PlanetList tessplanet ={this.state.tessplanet}/>
           <Bottomnav/> 
        </div>
  );
  }
}

export default App;
