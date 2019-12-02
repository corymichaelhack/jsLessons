/**************************
PIE CLIENT WALKTHROUGH 3 - CLASS COMPONENTS AND STATE
**************************/

/* 
ANCHOR reactstrap
************
  REACTSTRAP
************
    - npm install bootstrap
    - npm install reactstrap
    - in App.js, import 'bootstrap/dist/css/bootstrap.css';
/*

ANCHOR Pies/Pie
PIES
************
    Folder Structure:
        pie-client
            src
                components
                    Pies <-------- CREATE: in VSCode
                        Pie <-------- CREATE: in VSCode
                            - Pie.js <-------- CREATE: in VSCode
                            - Pie.css <-------- CREATE: in VSCode
                        - Pies.js <-------- CREATE: in VSCode
                        - Pies.css <-------- CREATE: in VSCode
*/

/*
ANCHOR pies.js
************
  PIES.JS
************
*/

import React, {useState, useEffect} from 'react';
import './Pies.css';
import {Card} from 'reactstrap';

const Pies = (props) => {

    const [pies, setPies] = useState([]);

    return(
        <Card className="cardName">

        </Card>
    )
}

export default Pies;

/*
    - import and call Pies component in App.js under <Auth />
    - our Pies component will be what we eventually use to fetch the pies from our server, but for now, we will create some test data in Pies.js to pass to our Pie.js file
        - the Pie.js component is what we will use to display all of our pies
            - again, this is taking advantage of the modularity React offers
    - CREATE 'pumpkinPie' object in Pies.js
*/

const pumpkinPie = {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4.2
    }

/*
ANCHOR pie.js
************
  PIE.JS
************
*/

import React from 'react';
import './Pie.css';
import {CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Pie = (props) => {
    return(
        <CardBody>

        </CardBody>
    )
}

export default Pie;

/*
    - import and call Pie component in Pies.js
    - now that we have some test data and both of our components fleshed out, we want to pass our test data from the PIES component to the PIE component as a property
        - how can we do that?
            - in the call to our Pie component in Pies.js, create a property called 'tryPie' and pass in pumpkinPie object
*/

<Pie tryPie={pumpkinPie} />

/*
    - console.log(props) in return of Pie.js to see if we're passing our pumpkinPie object as a property
    - now that we see that we're passing our pumpkinPie object from Pies to Pie, how can we dig into the tryPie property and display the values from our object?
        - using interpolation and digging into tryPie
*/

{/* <CardTitle>{props.tryPie.nameOfPie}</CardTitle> */}

// create 5 more <Card> tags to display the rest of the information from our object

{/*
    <CardText>{props.tryPie.baseOfPie}</CardText>
    <CardText>{props.tryPie.crust}</CardText>
    <CardText>{props.tryPie.timeToBake} minutes to bake</CardText>
    <CardText>{props.tryPie.servings} Servings</CardText>
    <CardSubtitle>{props.tryPie.rating} out of 5!</CardSubtitle> 
*/}

/*
    - we are now successfully passing our test data from our Pies component to our Pie component, but when we actually fetch our data from our server, it's not going to be returned to us as a single object, we're going to have multiple objects nested in an array - just like you would see when fetching from almost any API
    - in Pies.js, rename the pumpkinPie object to 'tryPiePies' and turn it into an array holding multiple objects
*/

// CHANGE FROM
const pumpkinPie = {
    nameOfPie: 'Pumpkin',
    baseOfPie: 'Pumpkin puree',
    crust: 'Pastry',
    timeToBake: 50,
    servings: 8,
    rating: 4.2
}

// TO
const tryPies = [
    {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4.2
    },
    {
        nameOfPie: 'Apple',
        baseOfPie: 'Jam',
        crust: 'Graham cracker',
        timeToBake: 30,
        servings: 6,
        rating: 4.0
    },
    {
        nameOfPie: 'Chocolate',
        baseOfPie: 'Pudding',
        crust: 'Pastry',
        timeToBake: 20,
        servings: 8,
        rating: 5.0
    }
]

/*
    - should see an error in the browser saying 'pumpkinPie' is not defined
    - we need to change the variable we're passing into our Pie components prop of tryPie since we changed our variable name
*/

{/* <Pie tryPie={tryPies} /> */}

/*
    - we fixed our break, but we are no longer seeing our tryPie being displayed to screen since we now have multiple pie objects inside of an array.
        - what types of methods can we use to loop over an array?
        - .map()!
*/

/*
ANCHOR pieRows() function
************
  PIES.JS
************
*/

import React, {useState, useEffect} from 'react';
import './Pies.css';
import {Card} from 'reactstrap';
import Pie from './Pie/Pie';

const Pies = () => {

  const [pies, setPies] = useState([]);

  // const pumpkinPie = {
  //   nameOfPie: 'Pumpkin',
  //   baseOfPie: 'Pumpkin puree',
  //   crust: 'Pastry',
  //   timeToBake: 50,
  //   servings: 8,
  //   rating: 4.2
  // }

  const tryPies = [
    {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4.2
    },
    {
        nameOfPie: 'Apple',
        baseOfPie: 'Jam',
        crust: 'Graham cracker',
        timeToBake: 30,
        servings: 6,
        rating: 4.0
    },
    {
        nameOfPie: 'Chocolate',
        baseOfPie: 'Pudding',
        crust: 'Pastry',
        timeToBake: 20,
        servings: 8,
        rating: 5.0
    }
]

  return(
    <div className="mainDiv">
        {/* !!! NEW CODE !!!*/}
      {
        tryPies.map((pie, index) => {
          return (
            <Card key={index} className="cardName">
              <Pie tryPie={pie} />
            </Card>
          )
        })
      }
    </div>
  )
}

export default Pies;

/* 
    - we are using our .map() to loop over our tryPies array.
    - In our return, we are creating a card for every single pie object from the tryPies array and displaying our PIE.js file.
    - Notice that each card has key={index}. Our code works without it, but we will get a warning saying that 'Each child in a list should have a unique "key" prop'. "Key" is a reserved keyword.
    - We can then pass in each iteration pie as a prop into our PIE.js file.
*/

/*
ANCHOR pies.css
************
  PIES.CSS
************
.mainDiv {
  text-align: center;
  display: flex;
  justify-content: space-around;
}

.cardName {
  border-radius: 1em;
  width: 20%;
  margin-top: 4em;
  box-shadow: 2px 2px 2px grey;
}

.cardName:hover{
  box-shadow: 4px 4px 4px darkslategrey;
  transform: scale(1.3, 1.3);
  font-weight: bold;
}
*/

/*
ANCHOR viewConductor() function
************
  APP.JS
************
    - create viewConductor function in App.js
        - we only want to see information we've saved to the database when logging in and when we receive that session token back from the server, so we need to create a function that shows us different components based off of whether or not we have a sessionToken
    - after creating viewConductor() function, comment out <Auth /> and <Pies /> and replace with function
    
*/

const viewConductor = () => {
    return sessionToken === undefined ? <Auth /> : <Pies />
}

//---------------------------------------------------------------------------------------------

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState('undefined');
  console.log(sessionToken);

  const viewConductor = () => {
    return sessionToken === undefined ? <Auth /> : <Pies />
  }

  return (
    <div className="App">
      <Navbar />
      {viewConductor()}
      {/* {sessionToken} */}
      {/* <Auth />
      <hr/>
      <Pies /> */}
    </div>
  );
}

export default App;



// * Go back and forth between having an undefined/defined token to demonstrate

// * GitBook Chapters 6 - 7

// Wham bam ya did it