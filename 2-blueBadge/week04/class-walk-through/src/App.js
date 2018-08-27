import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => {
    this.setState({ isUser: !this.state.isUser })
  }

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        <Login toggleForm={ this.changeUserStatus }/>
      )
    } else {
      return (
        <Signup toggleForm={ this.changeUserStatus }/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar/> 
          { this.authViewShow() }
        <Footer/>
      </div>
    );
  }
}

export default App;