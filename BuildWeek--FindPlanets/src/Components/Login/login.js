import React, { Component } from 'react';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: ''
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
//   onSubmit = (event) => {
//     event.preventDefault();


//   }

   login = () => {
    axios.post('https://build-week-tess.herokuapp.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token' , res.data)
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
      
  }
  render() {
    return (
      <form onSubmit={e => {
          e.preventDefault();
          this.login();
      }}>
        <h1>Login Below!</h1>
        <input
          type="username"
          name="username"
          placeholder="Enter Username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}