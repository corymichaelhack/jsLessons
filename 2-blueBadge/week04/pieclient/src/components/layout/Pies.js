import React, { Component } from 'react';
import PieTable from './PieTable';

class Pies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pies: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pies/', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }) 
      .then(res => res.text())
      .then(text => {
        this.setState({
          pies: text
        })
      })
  }
    
    render() {
    return (
      <div>
        <PieTable pieData={ this.state.pies }/>
      </div>
    )
  }
}

export default Pies;