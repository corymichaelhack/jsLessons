




/**************************
PIE CLIENT WALKTHROUGH 4 - ROUTER
**************************/
/*
Recap differences between functional and class components

Quickly recap what state and props are

npm install react-router-dom

Make new files:


components
  Auth
  Navbar
  *Main.js (new)
  Pies
    Pies.js
    Pies.css
    Pie
      Pie.js

  layout
    AuthForm.js
    Footer.js
    Home.js (new)
    Navbar.js
    Pies.js (new)

Go to index.js:
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // new
import './index.css';
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

/*
Talk about why we would add BrowserRouter here (links to whole site)

Go to Main.js:
*/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './auth';
import Pies from './Pies';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Auth }/>
      <Route path='/pies' component={ Pies }/>
    </Switch>
  </main>
)

export default Main;

// Now, go to App.js:

/*
Now go to App.js and cut the following out and paste in Home.js:
*/

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
//import Auth from './components/auth' DELETE
import Main from './components/layout/Main'

class App extends Component {
 
 
  

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
      </div>
    );
  }
}

export default App;



/*
Go to the App.css and add the following for moving the table to the middle:



Now, plug it in to Pies component:
*/

import React, { Component } from 'react';
import Pie from './Pie/Pie';

class Pies extends Component {

  render() {
    return (
      <div>
        <Pie/>
      </div>
    )
  }
}

export default Pies;

/*
Run it and see what happens when you adjust the link from localhost:3000 to localhost:3000/pies

Discuss what routing is doing

Now, go to Navbar.js; change a tags to Link tags and add necessary 'to' links:
*/

import React from 'react';
import { Link } from 'react-router-dom'; // new

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-ul">
          <li className="nav-li home"><Link to='/pies'>PIES</Link></li>
          <li className="nav-li"><Link to='/'>Sign Up/Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

/*
Discuss how css styling still is the same even though we now have Link tags instead of a tags => react-router-dom holds to the basic structure of a tags for this attribute

Run it and link to other pages based on navbar clicks
*/