/*********************
PIE CLIENT WALKTHROUGH 1 - CREATE-REACT-APP, JSX, COMPONENTS
*********************/

// * Set up Project Folder Structure

/*

  Inside javaScriptPrework add new folder

  4-react-fundamentals

  Inside the terminal, in the 4-react-fundamentals directory

  create-react-app pie-client

     cd intro pie-client and

    code .

    npm start
*/

// * Show folder structure

/*
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
*/

// * Explain React flow to browser

//  browser (chrome) <= index.html (<div id="root"></div>) <= index.js (ReactDOM.render(<App />, document.getElementById('root'))) <= App.js (return (JSX)) <= other components

// * Tear our boiler App.js
// Delete the import of logo in App.js

// * Add new JSX to Return

/*
Add this in the return
*    return (
    *       <div className="app">
    *          <h1>Pies</h1>
    *        </div>
      )

? Ask class about JSX - Check understanding and fill in gaps

* Tear out more boiler plate in Index.js

Delete import of service worker and registerServiceWorker() in index.js

*/


// * Setup files and folders for Navbar:
/*
*  Components
*   Navbar
*     Navbar.js
*     Navbar.css
*/

// * Build NavBar Component

/*
in Navbar.js:

import React from 'react';

import './Navbar.css';

const Navbar = (props) => {
  return(
    <nav>
      <h1>Pie Client</h1>
    </nav>
  )
}

export default Navbar;

* Explain that we can apply styling to JSX with 'CSS in JS'
* Explain we can also import assets like they were JavaScript
* All components need to return JSX
* Explain that since functional components are simply components, we can pass props as a parameter

? Ask students about Props - Check understanding and fill gaps
*/

// * Set up Assets
/*

lets add assets to project:
source
*  Assets
*    logout.jpg
*    pie.jpg

*/

// * Update Navbar.css:

/*

nav {
    margin : 0;
    background-color: whitesmoke;
    color : cadetblue;
    height : 10vh;
    display : flex;
    flex-direction: row;
    justify-content: space-between
}

.nav-img {
    height : 100%;
}

*/

// * Spruce up the Navbar

/*

import React from 'react';

import './Navbar.css';
* import piePic from '../../assets/pie.jpeg';

const Navbar = (props) => {
  return(
    <nav>
*      <img src={piePic} alt="Pie Picture" />
    </nav>
  )
}

export default Navbar;
*/

// * Add Navbar to App.js - Should display a plain navbar with a pie in the top left corner and 'Pie Client' on far right

// * Create Logout Component Folder Structure

/*
components
  Navbar
    Navbar.js
    Navbar.css
*   Logout
*     Logout.js
*     Logout.css
*/

// * Build Logout Component

/*
    inside Logout.js:
    import React from 'react';

    import './Logout.css';
    import logoutPic from '../../../assets/logout.png';

    const Logout = (props) => {
    return (
        <img className="logout-img" src={LogoutPic} alt="Logout Picture" onClick={props.logout} />
    );
};

    export default Logout;
*/

// * Update Logout CSS

  /*
    .logout-img {
    height : 100%;
  }

*/

// * Add Logout to Navbar

// * Assign GitBook 

/*
  Slack out to instructor code - pin to channel
  
  clone repo and show how to add to folder:
  
  4-reactFundamentals
*   (clone here)
    my-react-app
*/

// * GitBook parts 1-3, or continuing to move forward in the GitBook if past Ch 3