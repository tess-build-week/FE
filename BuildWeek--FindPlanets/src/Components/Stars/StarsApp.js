import React from 'react';


import StarsList from './StarsList';
import axios from "axios";

class StarsApp extends React.Component {
  constructor(){
    super();
    this.state = {
      tessStars:[]
    };
  }
  //Mounting the star component 
  componentDidMount(){
    console.log("inside ComponentDIdMOunt2");
    this.getStar();
  }
  getStar = URL => {
    axios.get("https://build-week-tess.herokuapp.com/stars/")
       .then(res => {
         console.log(res.data);
         this.setState({tessStars: res.data})
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
         <div className="Starsdiv">
          
            <StarsList tessStars ={this.state.tessStars}/>
           
        </div>
  );
  }
}

export default StarsApp;
