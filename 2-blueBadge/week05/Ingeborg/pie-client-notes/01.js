/*********************
PIE CLIENT WALKTHROUGH 1 - CREATE-REACT-APP, JSX, COMPONENTS
*********************/

// * Set up Project Folder Structure

/*

  npm install -g create-react-app

  Folder Structure:
    JSMonth2019
      javascriptLibrary
        0-prework
        1-jsFundamentals
        2-domFundamentals
        3-apiFundamentals
        4-nodeFundamentals
        5-reactFundamentals 
      projects
        gold
        blue
          pieProject
            server
            **pieclient**
        
        cd into pieProject
        
        create-react-app pieclient
        
        cd into pieclient
        
        npm start
*/

/*
  WHAT WE GET OUT OF THE BOX WHEN WE CREATE A REACT APPLICATION
    - Node Modules: packages that NPM installs that allow our React application to work - * won't touch *
    - index.html: is ultimately what gets read by the browser and is resposible for displaying everything to the page - * won't touch *
    - manifest.json: provides information about the application and how it should behave when installed on a users' mobile device or desktop. This is required to the the 'add to home screen' prompt on mobile devices * won't touch *
    - gitignore: if we package up our code and push it to github, everything in our gitignore file won't be included in that push. Anyone cloning our project will still get the 'guts' of our application without actually needing the node modules - we can still install the necessary dependencies for the application to work
        - any credentials we're using in our application can also be stored in our gitignore file so it's not available anywhere on the web
    - package.json: identifies information that will help other developers who are looking at our project know what's going on.
        - dependencies are node module packages that we want to install to get the project up and running
        - think of react, react-dom, and react-scripts as the top of a pyramid of packages needed for the project to run. Each of those packages have other dependencies that they need to run and work properly.
        - lintConfig helps find errors before you compile and run your application
        - browserList takes development code and configures it so it's browser-friendly during production
        - running an npm install command will read all of the dependencies in the package.json file and install the necessary node modules so the application can run properly
    - package-lock.json: locks the version of each package we have installed. If someone else clones and runs our project, they then have the exact same version that we have which helps prevent unnecessary breaks
        - basically a version control system that acts as a failsafe
*/

/*
FILES WE WON'T USE
************
    - app.test.js * remove *
    - serviceWorker.js * leave *
    - to start our application, we have to CD into the folder that is our React project (pie-client)
        - npm start to boot up application
*/

/*
ANCHOR BEGIN LESSON
************
  APP.JS
************
    - remove all code except for the main div. Notice that the logo import is now greyed out. VSCode is helpful and says, hey, we've imported this logo, but it's not being used or called anywhere
        - in app.css, remove everything except for 'text-align: center'
    - app.js is our 'parent' component - it controls the view of our entire application
*/

<p>This is a test of React!</p>
// save file and reload page

import React, {useState} from 'react';
// import useState after React. useState allows us to store 'state' variables in your React component. State data is generally presentational data that we can manipulate. We'll come back to useState in a bit.

const [sessionToken, setSessionToken] = useState(undefined);
console.log(sessionToken);
/*
    - useState uses something called array destructuring. We'll breifly cover array destructuring here in a minute to familiarize you with it, but we'll come back to it later this week. Right now the focus is on React
    - useState always accepts two values:
        1. a state variable that's based upon the initial value we pass into useState - in this case that's undefined.
            let sessionToken = undefined;
        2. a function defined as setSessionToken. setSessionToken is our means of changing the value of our state variable, so if sessionToken in this case.
        - naming convention for state variables is always what our state variable is called, and then 'set'_____.
*/

/*
ANCHOR Array Destructuring
************
ARRAY DESTRUCTURING
************
    - destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals.
    - it creates a pattern that describes the kind of value you are expecting and makes the assignment. Array destructuring uses position.
*/

let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
console.log(first, second, third);

// let first = 'Fellowship of the Ring'
// let second = 'Two Towers'
// let third = 'Return of the King'

let [a, , c] = ['Mercury', 'Venus', 'Earth'];
console.log(a, c);

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let [first, , third, ...others] = planets;
console.log(first);
console.log(third);
console.log(others);

/*
************
  APP.JS
************
*/

// in return of app.js

{sessionToken}

/*
    - React uses interpolation just like we saw in gold badge, except in React, we do this by placing curly braces around our variable
        - why are we not seeing anything when using interpolation with 'sessionToken' in our return?
            - change undefined to be a string
*/

<Navbar />
{/* <Navbar setSession={setSessionToken} /> */}


/*
    - naming convention for React components is to uppercase the first letter. This sets our components apart from the rest of our code.
        - VSCode is also helpful and color codes them differently for us
    - Notice that we get a break when we call a Navbar component - why is that? -> We haven't actually made a navbar component yet!
    - make a new folder inside of src called components. our components folder will house all of the other components that make up the view of our entire site

    Folder Structure:
        pie-client
            src
                components <-------- CREATE: in VSCode
                    Navbar <-------- CREATE: in VSCode
                        - Navbar.js <-------- CREATE: in VSCode
                        - Navbar.css <-------- CREATE: in VSCode
*/

/*
ANCHOR Navbar.js
************
 NAVBAR.JS
************
*/

import React from 'react';
// this imports the react functionality from the react node_module

import './Navbar.css';

const Navbar = (props) => {
    // props are properties defined by a parent or some sort of ancestor component that can be used inside of the current component we're working in
        // in this case, app.js is our parent component, and our Navbar component is our child component. Just like with regular function parameters, props is a placeholder for information we pass into this component from a parent component

    return (
        <div>
            <nav>
                <img id="piePic" src={piePic} alt="pie" />
            </nav>
        </div>
    )
}

export default Navbar;
// to pull things INTO the current component we're working in, we need to import. To take things OUT of the current file we're working with to make them usable eslewhere, we need to export. In this case we're exporting our whole navbar component

/*
************
  APP.JS
************
*/

import Navbar from './components/Navbar/Navbar';
/*
    - we should see an error after importing the Navbar component saying piePic is not defined
        - create an assets folder inside of the src folder.
        - just like in Gold Badge, our assets folder is used to store multimedia content.
    - go to the web and find a picture of a pie and import into Navbar.js
*/

/*
************
 NAVBAR.JS
************
*/

import piePic from '../../assets/piePic.jpg'; // relative pathing

// INSTALL REACT EXTENSION FOR CHROME AND DIG INTO IT TO SEE PIE PIC

/*
ANCHOR Navbar.css
************
 NAVBAR.CSS
************
*/

/*
    #piePic {
        height: 75px;
    }
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: lightgrey;
    }
*/

/*
ANCHOR Logout
************
   LOGOUT
************
    Folder Structure:
        components
            Navbar
                Logout <-------- CREATE: in VSCode
                    - Logout.js <-------- CREATE: in VSCode
                    - Logout.css <-------- CREATE: in VSCode
                - Navbar.js
                - Navbar.css
*/

import React from 'react';

import './Logout.css';

const Logout = (props) => {
    return(
        <div>
            <img id="logout" className="logout" src={logoutPic} alt="powerButton" />
        </div>
    )
}

export default Logout;

/*
    - after structuring out Logout component, go to web and get picture of a power button for logout image
    - once image is saved to assets folder, import to logout component
*/

import logoutPic from '../../../assets/logout.png';

/*
************
 NAVBAR.JS
************
    - import Logout component
    - call Logout component
*/

import Logout from './Logout/Logout';

<Logout />

/*
ANCHOR Logout.css
************
 LOGOUT.CSS
************
*/

/*
    #logout {
        height: 70px;
    }
*/