/**********************************************
Node Challenge 3 - Authorized CRUD 
( Sequelize, Express, Jsonwebtoken< validateSession )
**********************************************/

/*
  BRONZE CHALLENGE:
  Implement a validate-session.js. Use the validateSession to protect every route in the animal-controller.js. They should block any request that does not have an authorization header that bears a token. This token should be one returned from the login or sign up methods.

  
  SILVER CHALLENGE:
  Add a new column named 'userId' to the animal model. This column should take integers, and rows and this column should not be null. Reset your database.

  Modify the '/create' endpoint to save the user from the request's id into the userId column.

  Make sure you sign up a new user and add your authorization header before you test.

  GOLD CHALLENGE:
  Taking advantage of the new userId column that links the row of the animal table to the user that posted it from the Silver level challenge, modify the delete endpoint to only allow users to delete only their own animals from the database. You will need to use an options object similar to open used in the Sequelize update() method.

  Similarly, modify the get to return only animals the requesting user has posted.
*/



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

* We are going to 'mock' data here -
* eventually this array will be removed,
* but to make sure out table displays the 
* way we want, we can mock it so see how it looks

next, let's add the following code to our Pies.js:
import React, {Component} from 'react';

import './Pies.css';

import React, { useState } from 'react';
import './Pies.css';

const testData = [
    {
      nameOfPie : 'Apple',
      baseOfPie : 'Delicious Apples',
      crust : 'Pastry',
      timeToBake : '45 Minutes',
      servings : '12',
      rating : 4
    },
    {
      nameOfPie: 'Cherry',
      baseOfPie: 'Fruit Filling',
      crust: 'Pastry',
      timeToBake: '30 mins',
      servings: 97,
      rating: 5
    },
    {
      nameOfPie: 'Pecan',
      baseOfPie: 'Sugary Goodness',
      crust: 'Graham Cracker',
      timeToBake: '40 mins',
      servings: 2,
      rating: 3
    }
  ];

const Pies = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Name of Pie</td>
                    <td>Base of Pie</td>
                    <td>Crust</td>
                    <td>Time to Bake</td>
                    <td>Servings</td>
                    <td>Rating</td>
                </tr>
            </thead>
            <tbody>
                {
                    testData.map((pie, index) => {
                        return <tr key={index}>{ pie.nameOfPie }</tr>
                    })
                }
            </tbody>
        </table>
    );
};


* Add CSS

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


? What are the imports doing here? 
 observe that we're pulling in another component, Pie, and a CSS file

* Add import of Pies to App, comment out Auth for a bit so we can see the Pies component in the browser

* explain use of dummy data - we will pull this data through an API later

* explain how .map() is iterating over the array we created to mock some data - and creating a new <tr> each time, AND returning the JSX to the DOM

* explain how React needs a key to correctly update components

* discuss how {} allow React to read any JavaScript expression as long as it's output as JSX

*/

// * let's build out Pie.js as follows:
/*
import React from 'react';

const Pie = (props) => {
  return (
    <tr>
      <td>{ props.pie.nameOfPie }</td>
      <td>{ props.pie.baseOfPie }</td>
      <td>{ props.pie.crust }</td>
      <td>{ props.pie.timeToBake }</td>
      <td>{ props.pie.servings }</td>
      <td>{ props.pie.rating }</td>
    </tr>
  )
}

export default Pie;

* discuss our use of props--the prop comes from the JSX attributes in the component call, hence pie is a prop

* we know each pie prop is a pie object with nameOfPie, baseOfPie, etc. keys, so we can write props.pie[property] in Pie.js and get a data value back

* draw their attention to the fact that we're really just outputting rows in a table with this Pie.js component

* this can be demonstrated with the React extension
*/

// * Next we're going to make App.js able to toggle between views

/*
- remove both <Auth /> & <Pies /> from the return ( ) in App.js

- we need to add an import to useState to our React import

- create a state value for the token

        const [ token, setToken] = useState(undefined);

- Add a ternary to allow App.js to toggle between Pies and Auth

        return (
          <div className="app">
            <Navbar />
            
            {
              token ? <Pies /> : <Auth />
            }

          </div>
        );


*/

// * Go back and forth between having an undefined/defined token to demonstrate

// * GitBook Chapters 6 - 7

// Wham bam ya did it
