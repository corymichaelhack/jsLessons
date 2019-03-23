/* 
Welcome students to blue badge--talk about the goals of the badge, the project,
and what their learning experience will look like

Slack them the blue badge calendar:
https://docs.google.com/document/d/1wVNLfg-n0DsS6sI-rgsIOOjTMO_D83OrnDXX0mAKs20/edit?usp=sharing
*/

let swapper = (obj, prop1, prop2) => {
  let temp = {};
  for (let enumerable in obj){
    // console.log(iterable)
    temp[enumerable] = obj[enumerable];
  }
  let placeholder = temp[prop2];
  temp[prop2] = temp[prop1];
  temp[prop1] = placeholder;

  return temp;
}

obj = {
  keya: '1',
  keyb: 2,
  keyc: false
}

console.log(swapper(obj, 'keya', 'keyb'));


/**************************
CODE CHALLENGE 1 - OBJECTS
**************************/

/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2
*/

// Option 1 (Not Quite Right)
const person = {
  fName: 'Tom',
  lName: 'McClellan'
}

function changePerson(obj, param1, param2) {
  
  let temp = obj.param1;
  obj.param1 = obj.param2;
  obj.param2 = temp;

  return obj
}

newObj = changePerson(person, 'fName', 'lName');

console.log(newObj);

// Option 2 (Better)
const person = {
  fName: 'Tom',
  lName: 'McClellan'
}

const food = {
  food1: 'Steak',
  food2: 'Tacos'
}

const changePerson = (obj, prop1, prop2) => {
  let newObj = Object.assign({}, obj);
  // let newObj = obj;

  let temp = newObj[prop1];
  newObj[prop1] = newObj[prop2];
  newObj[prop2] = temp;

  return newObj;
}
const newObject = changePerson(food, 'food1', 'food2');
console.log(food, "Unchanged Object");
console.log(newObject, 'Changed Object');

//
const sampleObj = {
  firstName: 'Quinn',
  lastName: 'Crabtree'
}

const objKeySwap = (obj, prop1, prop2) => {
  const outputObj = {};

  for (let key in obj){
    outputObj[key] = obj[key];
  }

  outputObj[prop2] = obj[prop1];
  outputObj[prop1] = obj[prop2];

  return outputObj;
}

console.log(objKeySwap(sampleObj, 'firstName', 'lastName'));

/*********************
PIE CLIENT WALKTHROUGH 1 - CREATE-REACT-APP, JSX, COMPONENTS
*********************/

//start by showing them the pieclient and start the pie server so they know where we're headed

/*
npm install -g create-react-app

Folder Structure:
  javascriptDec2018
    javascriptLibrary
      0-preWork
      1-jsFundamentals
      2-domFundamentals
      3-apiFundamentals
      4-reactFundamentals (new folder)

cd into 4-reactFundamentals

create-react-app pieclient
cd into pieclient

Show folder structure:
  pieclient
    node_modules => explain how npm made this
    public
      favicon.ico => small icon on browser tab
      index.html => only html file in app
      manifest.json => for mobile
    src
      App.css => css for app.js
      App.js => root component
      App.test.js => for testing (DELETE, but not yet)
      index.css => styling for entire project
      index.js => middleman between index.html and App.js
      logo.svg => (DELETE, but not yet)
      ServiceWorker.js => for holding data off app for faster access (DELETE, but not yet)
    .gitignore => hides from git to prevent pushing to GitHub
    package-lock.json => more secure and detailed package.json
    package.json => lists dependencies in app
    README.md

  Explain flow of React
  
  browser (chrome) <= index.html (<div id="root"></div>) <= index.js (ReactDOM.render(<App />, document.getElementById('root'))) <= App.js (return (JSX)) <= other components
  
  FAST!!

  Run app => npm start

  Delete things and replace App.js with:
  return (
    <div className="app">
      <h1>PIES!</h1>
    </div>
  )

Delete import of logo on top and registerServerWorker() in index.js

Run again => just plain PIES! on white

Setup files and folders for Navbar:
  components
    Navbar
      Navbar.js
      Navbar.css
      Logout
        Logout.js
        Logout.css

//in Navbar.js:

import React from 'react';

import './Navbar.css';

const Navbar = (props) => {
  return(
    <nav>
      <h1>This is a Navbar!</h1>
    </nav>
  )
}

export default Navbar;

//explain that importing React allows us to do lots of things, chiefly using JSX
//css import is same as gold badge
//functional component shows properties passed to the component, which can be used inside
//every component will return some JSX, which looks like HTML and gets rendered to the page as HTML

//lets add assets to project:
source
  assets
    logout.jpg
    pie.jpg

//lets update Navbar.css:
nav{
  margin: 0;
  background-color: purple;
  color: orange;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between
}

nav img{
  height: 100%;
}

//lets use our css & assets in Navbar.js:
import React from 'react';

import './Navbar.css';
import piePic from '../../assets/pie.jpeg'; *new*

const Navbar = (props) => {
  return(
    <nav>
      <img src={piePic} alt="Pie Picture" /> *new*
    </nav>
  )
}

export default Navbar;

//lets create a logout component:
components
  Navbar
    Navbar.js
    Navbar.css
    Logout
      Logout.js
      Logout.css

//inside Logout.js:
import React from 'react';

import './Logout.css';
import logoutPic from '../../../assets/logout.png';

const Logout = (props) => {
  return(
    <img className="Logout" src={logoutPic} alt="Logout" onClick={props.logout}/>
  )
}

export default Logout;

//update Logout.css:
.Logout{
  height: 100%;
}

//add a logout picture to assets
*/

/*
  Assign gitbook on LMS
  
  clone repo and show how to add to folder:
  
  4-reactFundamentals
    (clone here)
    my-react-app
*/

/*
Gitbook parts 1-3, or continuing to move forward in the gitbook if past Ch 3
*/