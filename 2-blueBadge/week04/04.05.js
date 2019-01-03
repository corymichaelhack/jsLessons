/**************************
CODE CHALLENGE 3 - STRINGS
**************************/

/*
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments
*/

const stringCheck = '    Welcome to eleven fifty     ';

const findTheCompany = (str, callback) => {
  str = typeof (str) == 'string' && str.trim().length > 0 && str.trim().length < 30 ? str.trim() : false;
  
  if (str) {
    str = str.replace('eleven fifty', 'Eleven Fifty');
    return callback(false, str);
  } else {
    return callback(true, 'Error: String must not be empty and must be a string type');
  }
}

const fixedString = findTheCompany(stringCheck, (err, message) => {
  if (!err && message) {
    return message;
  } else {
    return {
      error: err,
      message: message
    }
  }
})

console.log(fixedString);


/**************************
PIE CLIENT WALKTHROUGH 3 - CLASS COMPONENTS AND STATE
**************************/

/*
//let's begin by further building out our folder structure:
components
  Auth
  Navbar
  Pies
    Pies.js
    Pies.css
    Pie
      Pie.js
      Pie.css

//next, let's add the following code to our Pies.js:
import React, {Component} from 'react';

import Pie from './Pie/Pie';
import './Pies.css';

class Pies extends Component {
  testData = [
    {
      nameOfPie: 'Name of Pie',
      baseOfPie: 'Base of Pie',
      crust: 'Crust',
      timeToBake: 'Time to Bake',
      servings: 'Servings',
      rating: 'Rating'
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
  ]

  render(){
    let pieRows = testData.map(pie => {
      return (
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

//reiterate what React, {Component} imports are doing at top of file
//observe that we're pulling in another component, Pie, and a CSS file
//draw their attention to the fact that we're using a class component rather than a function component ->
//we will eventually have this component changing information internally (fetch through componentDidMount)
//explain use of dummy data
//explain pieRows use of .map() inside render method--take every el from the array, output value to new array
//explain how React needs a key to correctly update components
//discuss how {} allow React to read any JavaScript expression as long as it is output as JSX

//let's build out Pie.js as follows:
import React from 'react';

const Pie = (props) => {
  return(
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

//discuss our use of props--the prop comes from the JSX attributes in the component call, hence, key & pie are props
//we know each pie prop is a pie object with nameOfPie, baseOfPie, etc. keys, so we can write props.pie.whatev in Pie.js
//and get a data value back
//draw their attention to the fact that we're really just outputting rows in a table with this Pie.js component
//this can be demonstrated with the React extension

//let's add the following to our Pies.css:
table, td{
  border: 1px solid black;
  border-collapse: collapse;
}

table{
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%)
}

//finally, let's update App.js to look like the following:
//add Pies import to top of file:
import Pies from './components/Pies/Pies';

//fill in inside of App component:
  state = {
    sessionToken: undefined
  }

  viewConductor(){
    return this.state.sessionToken !== undefined ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }

  render(){
    return(
      <div className="App">
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}
      </div>
    )
  }
*/