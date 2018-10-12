/**************************
NODE CHALLENGE 2
**************************/


/**************************
PIE API WALKTHROUGH 4 - CONNECT WITH CLIENT
**************************/
/*
We are now going to connect the database we created here with the pieclient app that we created last week (React with Node Server)

Go to Pies.js in pieclient/src/components/layout

You should currently see the following:
*/

import React, { Component } from 'react';
import PieTable from './PieTable';

class Pies extends Component {
  
  render() {
    return (
      <div>
        <PieTable/>
      </div>
    )
  }
}

export default Pies;

/* 
Add a constructor:

constructor() {
  super() 
  this.state = {
    pies: []
  }
}
*/

/*
In the state, we are simply adding an array that will catch the various json objects of pies from the server

We will fetch them inside a componentDidMount lifecycle method (this is a great place to fetch due to the fact that it happens BEFORE the final render of the component)

Add the following below your constructor:

componentDidMount() {
  fetch('http://localhost:3000/pies') // Make sure both the server and client are running
    .then(res => res.json())
    .then(json => {
      this.setState({
        pies: json
      })
    })
}

What does .map() do again?

What more do we have to put in to our fetch if we want to do more than a GET?:

fetch('http://localhost:3000/pies', {
  method: 'POST',
  body: JSON.stringify(<something>),
  headers: new Headers: {
    'Content-Type': 'application/json',
    'Authorization': 'sessionToken'
  },
  etc.
})

Lastly in this component, we have to pass props down to PieTable in order to display the data.  Add the following to the link inside the JSX:

<div>
  <PieTable pies={this.state.pies}/>
</div>

What is JSX again?

How do we pass props from one component to the next?

Now, go to PieTable.js

You should see the following:
*/

import React from 'react'

const PieTable = () => {
  
  return(
    <div>
      <h3>Pie List</h3>
      <table border='1' className='pies'>
        <thead>
          <tr>
            <th>Name of Pie</th>
            <th>Base of Pie</th>
            <th>Crust</th>
            <th>Time to Bake</th>
            <th>Servings</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>Fruit</td>
            <td>Sourdough</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>Peach</td>
            <td>Fruit</td>
            <td>Sourdough</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>Chocolate Cream</td>
            <td>Cream</td>
            <td>Oreo</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
          <tr>
            <td>Chicken Pot Pie</td>
            <td>Gravy</td>
            <td>Hot Water Crust</td>
            <td>50 min</td>
            <td>8</td>
            <td>5 stars</td>
          </tr>
        </tbody>
      </table>
    </div> 
  )
}

export default PieTable;

/*
Prune the JSX down to this:

<div>
  <h3>Pie List</h3>
  <table border='1' className='pies'>
    <thead>
      <tr>
        <th>Name of Pie</th>
        <th>Base of Pie</th>
        <th>Crust</th>
        <th>Time to Bake</th>
        <th>Servings</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td> min</td>
        <td></td>
        <td> stars</td>
      </tr>
    </tbody>
  </table>
</div> 

We now need to grab the props

How do we grab props in a class component vs. a functional component?:

A class component grabs props via the super() inside the constructor(); a functional component grabs props via paramters within the function (inside the parentheses)

Add the word 'props' inside your paramter of this component:
*/

const PieTable = (props) => {}

/*
Under the closing thead tag, we will be adding a .map() to filter through the pies objects and place them inside the JSX accordingly:

<div>
  <h3>Pie List</h3>
  <table border='1' className='pies'>
    <thead>
      <tr>
        <th>Name of Pie</th>
        <th>Base of Pie</th>
        <th>Crust</th>
        <th>Time to Bake</th>
        <th>Servings</th>
        <th>Rating</th>
      </tr>
    </thead>
    {
      props.pies.map((pie, id) => {
        return (
        <tbody>
          <tr key={ id }>
            <td>{ pie.nameOfPie }</td>
            <td>{ pie.baseOfPie }</td>
            <td>{ pie.crust }</td>
            <td>{ pie.timeToBake } min</td>
            <td>{ pie.servings }</td>
            <td>{ pie.rating } stars</td>
          </tr>
        </tbody>
        )
      })
    }
  </table>
</div> 

NOTE: you will get an error for the key attribute in your <tr>; that's ok for this walk through

Notice what we are doing: 
  We are mapping through the pies, which we store in our state and pass via props from Pies to PieTable; 

  We grab each individual pie object, calling it pie, and its corresponding id;

  We set the individual id accordingly to each row of the table, otherwise it would duplicate id numbers (bad);
  
  We display each column of the table into the table of the front end
*/