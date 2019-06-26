import React from 'react';
import './App.css';
import PlanetList from './Components/Planets/PlanetList';
import axios from 'axios';

class renderPlanets extends React.Component {
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
         <div>
           <PlanetList tessplanet ={this.state.tessplanet}/>
        </div>
  );
  }
}

export default renderPlanets;
