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

  //Mounting my component.

  //this.getPlanet invokes my thing with the axios.get 
    componentDidMount(){
      console.log("inside ComponentDIdMOunt");
      this.getPlanet();
    }
    getPlanet = URL => {
      axios.get("https://build-week-tess.herokuapp.com/planets")
         .then(res => {
           console.log(res.data);
           this.setState({tessplanet: res.data})
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
         <div className ="planetsbackground">
           <PlanetList tessplanet ={this.state.tessplanet}/>
        </div>
  );
  }
}

export default renderPlanets;
