import React, {Component} from 'react';

import Pie from './Pie/Pie';
import './Pies.css';

class Pies extends Component {
  state = {
    pies: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pies')
      .then(res => res.json())
      .then(json => {
        let colNames = {
          nameOfPie: 'Name of Pie',
          baseOfPie: 'Base of Pie',
          crust: 'Crust',
          timeToBake: 'Time to Bake',
          servings: 'Servings',
          rating: 'Rating'
        }
        this.setState({
          pies: [].concat(colNames).concat(json)
        })
      });
  }

  render(){
    let pieRows = this.state.pies.map(pie => {
      return(
        <Pie key={pie.nameOfPie} pie={pie} />
      )
    })
    return(
      <table>
        <tbody>
          {pieRows}
        </tbody>
      </table>
    )
  }
}

export default Pies;