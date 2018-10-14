// import React, { Component } from 'react';
// import PieTable from './PieTable';

// class Pies extends Component {
  
//   render() {
//     return (
//       <div>
//         <PieTable/>
//       </div>
//     )
//   }
// }

// export default Pies;

import React, { Component } from 'react';
import PieTable from './PieTable';

class Pies extends Component {
  constructor() {
    super() 
    this.state = {
      pies: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pies')
      .then(res => res.json())
      .then(json => {
        this.setState({
          pies: json
        })
      })
  }
  
  render() {
    return (
      <div>
        <PieTable pies={this.state.pies}/>
      </div>
    )
  }
}

export default Pies;