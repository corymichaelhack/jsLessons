import React, { Component } from 'react';
import AuthForm from '../layout/AuthForm';

export default class Signup extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AuthForm formName="Sign Up" changeInputs={ this.handleChange }/>
        <h6>Login <button onClick={ this.props.toggleForm }>HERE</button> if you have an account</h6>
      </div>
    )
  }
}