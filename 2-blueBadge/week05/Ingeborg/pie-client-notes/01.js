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
 pie-client
   node_modules => explain how npm made this
            npm puts various things on your computer. That’s its job. 
            Local install (default): puts stuff in ./node_modules of the current package root. 
            Packages are dropped into the node_modules folder under the prefix. When installing locally, this means that you can require("packagename") to load its main module, or require("packagename/lib/path/to/sub/module") to load other modules.
            We can "download" packages into our project and access them with a local pathway to use them.
*  public
    favicon.ico => small icon on browser tab
    index.html => only html file in app
    manifest.json => for mobile
*  src
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

// * Tear out boiler App.js
// * Delete the import of logo in App.js

// * Add new JSX to Return

/*
Add this in the return: 
*  return (
*    <div className="app">
*      <h1>Pies</h1>
*    </div>
*  )

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
* Explain that since functional components are really just functions, we can pass parameters

* Explain the ideas behind props - students haven't seen them yet
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
*     <img className="nav-img"  src={piePic} alt="Pie" />
      <h1>Pie Client</h1>
    </nav>
  )
}

export default Navbar;

* Draw attention to 'className' in JSX vs. 'class' in normal HTML

*/

// * Add Navbar to App.js - Should display a plain navbar with a pie in the top left corner and 'Pie Client' on far right

// * Discuss Component imports and exports
/*
  The files/components in this project don't inherently have the ability to speak to one another. We have to specify who is related to whom. Just like with DOM manipulation, we can establish relationships between components. We use imports and exports to do that. Imports and exporting files is not specific to React. This is something that we can use thanks to JavaScript.
*/

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

    const Logout = () => {
    return (
        <img className="logout-img" src={LogoutPic} alt="Logout" onClick={props.logout} />
    );
};

    export default Logout;
*/

// * Flesh out Logout CSS

/*
    .logout-img {
    height : 100%;
  }

*/

// * Add Logout to Navbar

/*
  const Navbar = (props) => {
  return(
    <nav>
      <img className="nav-img"  src={piePic} alt="Pie" />
      <h1>Pie Client</h1>
*     <Logout />
      </nav>

  )
}
*/

// * Explain how this Logout component is attempting to access a logout method thats being passed as a prop - it will not work yet - more on this later