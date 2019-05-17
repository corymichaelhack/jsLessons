/**************************
PIE CLIENT WALKTHROUGH 3 - CLASS COMPONENTS AND STATE
**************************/

/*
let's begin by further building out our folder structure:
components
  Auth
  Navbar
* Pies
*   Pies.js
*   Pies.css
*   Pie
*     Pie.js

next, let's add the following code to our Pies.js:
import React, {Component} from 'react';

import './Pies.css';

* We are going to 'mock' data here -
* eventually this array will be removed,
* but to make sure out table displays the 
* way we want, we can mock it so see how it looks

const testData = [
  {
    nameOfPie : 'Apple',
    baseOfPie : 'Delicious Apples',
    crust : 'Pastry',
    timeToBake : '45 Minutes',
    servings : '12',
    rating : '4 Stars'
  },
  {
    nameOfPie: 'Cherry',
    baseOfPie: 'Fruit Filling',
    crust: 'Pastry',
    timeToBake: '30 mins',
    servings: 97,
    rating: 5 stars
  },
  {
    nameOfPie: 'Pecan',
    baseOfPie: 'Sugary Goodness',
    crust: 'Graham Cracker',
    timeToBake: '40 mins',
    servings: 2,
    rating: 3 stars
  }
];

class Pies extends React.Component {

  render(){
    let pieRows = testData.map(pie => {
      return (
        <Pie key={pie.nameOfPie} pie={pie} />
      )
    })
    return(
      <table>
      <thead>
          <tr>
              <td>Name of Pie</td>
              <td>Base of Pie</td>
              <td>Crust</td>
              <td>Time To Bake</td>
              <td>Servings</td>
              <td>Rating</td>
          </tr>
      </thead>
        <tbody>
          {pieRows}
        </tbody>
      </table>
    )
  }
}

export default Pies;

? What are the imports doing here? 
 observe that we're pulling in another component, Pie, and a CSS file

 * draw their attention to the fact that we're using a class component rather than a function component and we're also accessing the React Component in a way we haven't before


* explain use of dummy data - we will pull this data through an API later

*explain pieRows use of .map() inside render method--take every el from the array, output value to new array

* explain how React needs a key to correctly update components

* discuss how {} allow React to read any JavaScript expression as long as it is output as JSX

*/

// * let's build out Pie.js as follows:
/*
import React from 'react';

const Pie = (props) => {
  return (
    <tr>
      <td>{props.pie.nameOfPie}</td>
      <td>{props.pie.baseOfPie}</td>
      <td>{props.pie.crust}</td>
      <td>{props.pie.timeToBake}</td>
      <td>{props.pie.servings}</td>
      <td>{props.pie.rating}</td>
    </tr>
  )
}

export default Pie;

* discuss our use of props--the prop comes from the JSX attributes in the component call, hence, key & pie are props

* we know each pie prop is a pie object with nameOfPie, baseOfPie, etc. keys, so we can write props.pie.whatev in Pie.js and get a data value back

* draw their attention to the fact that we're really just outputting rows in a table with this Pie.js component

* this can be demonstrated with the React extension
*/

// * Adding CSS

/*

* let's add the following to our Pies.css:
    table, td {
        padding: 10px;
        border-collapse : collapse;
    }

    thead {
        background-color : whitesmoke;
        border-bottom: 2px solid darkslategray;
    }

    tr {
        border-bottom: 1px solid lightgray;
    }

    table {
        margin: 25vh auto;
    }

* finally, let's update App.js to look like the following:
import Pies from './components/Pies/Pies';

* fill in inside of App component:
  state = {
    sessionToken: undefined
  }

 * Add viewConductor()
  viewConductor(){
    return this.state.sessionToken !== undefined ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }

  render(){
    return(
      <div className="App">
*       <Navbar logout={this.removeSessionToken}/>
*       {this.viewConductor()}
      </div>
    )
  }
*/

// * Go back and forth between having an undefined/defined token to demonstrate

// * GitBook Chapters 6 - 7