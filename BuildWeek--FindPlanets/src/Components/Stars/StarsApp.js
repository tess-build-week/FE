import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarsList from './Components/StarsList';

class StarsApp extends React.Component {
  constructor(){
    super();
    this.state = {
      tessStars:[]
    };
  }
  //Mounting the star component 
  componentDidMount(){
    this.getStar();
  }
  getStar = URL => {
    axios.get("https://build-week-tess.herokuapp.com/stars")
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
           <StarsList tessStars ={this.state.tessStars}/>
           <Bottomnav/>
        </div>
  );
  }
}

export default StarsApp;
