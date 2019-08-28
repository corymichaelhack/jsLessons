import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {
  state = {
    firstName:'',
    lastName: '',
    email: '',
    password: '',
    login: true
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let authURL = this.state.login ? 'http://localhost:3000/auth/signin' : 'http://localhost:3000/auth/signup'
    fetch(authURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(json => this.props.tokenHandler(json.sessionToken))
    .catch(err => console.log(err));
  }

  loginToggle = (event) => {
    event.preventDefault();
    const login = this.state.login;
    this.setState({
      login: !login,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  render(){
    let title = this.state.login ? "Login" : "Signup";
    let signupFields = !this.state.login 
      ? (
        <>
          <label htmlFor="firstName">First Name:</label><br/>
          <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange}/><br/>
          <label htmlFor="lastName">Last Name:</label><br/>
          <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange}/><br/>
        </>
      ) 
      : null
    return(
      <form className="cardLike" onSubmit={this.handleSubmit}>
        <h1>{title}</h1>
        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" value={this.state.email} onChange={this.handleChange}/><br/>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/><br/>
        {signupFields}
        <button onClick={this.loginToggle}>Login/Signup Toggle</button><br/>
        <button type="submit">Submit User Data</button>
      </form>
    )
  }
}

export default Auth;