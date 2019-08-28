import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Pies from './components/Pies/Pies';
import Auth from './components/Auth/Auth';
import './App.css';

class App extends Component {
  state = {
    sessionToken: undefined,
  }

  viewConductor() {
    return this.state.sessionToken !== undefined ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }

  storeSessionToken = (token) => {
    this.setState({sessionToken: token})
  }

  removeSessionToken = () => {
    this.setState({sessionToken: undefined})
  }

  render() {
    return (
      <div className="App">
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}
      </div>
    );
  }
}

export default App;
