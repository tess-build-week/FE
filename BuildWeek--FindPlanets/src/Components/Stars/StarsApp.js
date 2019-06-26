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
    componentDidMount(){
      this.getStars("api");
    }
    getStars = URL => {
      fetch(URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({tessStars: data.results});
        })
        .catch(err => {
          throw new Error(err);
        });
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
