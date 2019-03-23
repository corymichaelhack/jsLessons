import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuthForm from './components/layout/AuthForm';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Main from './components/layout/Main'

class App extends Component {

 
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => this.setState({ isUser: !this.state.isUser })

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        // Login
        <Login toggleForm={ this.changeUserStatus }/>
      )
    } else {
      return (
        // Signup
        <Signup toggleForm={ this.changeUserStatus }/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        {/* { this.authViewShow() } */}
        {/* <AuthForm/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
