/**************************
CODE CHALLENGE 4


Challenge: 

Given this object( create nexflix object here), 
Sort through and display the information as shown here:
{Name of Show}
  {image}
{episode number}{episode name}
  {episode synopsis}



**************************/







/**************************
PIE CLIENT WALKTHROUGH 4 - ROUTER
**************************/
/*
Recap differences between functional and class components

Quickly recap what state and props are

npm install react-router-dom

Make new files:

components
  layout
    AuthForm.js
    Footer.js
    Home.js (new)
    Main.js (new)
    Navbar.js
    Pies.js (new)

Go to index.js:
*/

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // new
import './index.css';
import App from './App';

render((
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
import Home from './Home';
import Pies from './Pies';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/pies' component={ Pies }/>
    </Switch>
  </main>
)

export default Main;

// Now, go to App.js:

import Main from './components/layout/Main'
// Code omitted
{ this.authViewShow() }
<Main/> // new

// In Home.js:

import React, { Component } from 'react'
import Login from '../auth/Login'
import Signup from '../auth/Signup'

class Home extends Component {
  

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Home;

/*
Now go to App.js and cut the following out and paste in Home.js:
*/

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// import Login from './components/auth/Login'; // DELETE
// import Signup from './components/auth/Signup'; // DELETE
import Main from './components/layout/Main'

class App extends Component {
  // CUT content below
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => this.setState({ isUser: !this.state.isUser })

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        <Login toggleForm={ this.changeUserStatus }/>
      )
    } else {
      return (
        <Signup toggleForm={ this.changeUserStatus }/>
      )
    }
  }
  // CUT content above

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        {/* { this.authViewShow() } => CUT */}
        <Footer/>
      </div>
    );
  }
}

export default App;

// App.js should now look like:

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;

// And Home.js should now look like:

import React, { Component } from 'react';
import Login from '../auth/Login';
import Signup from '../auth/Signup';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

  changeUserStatus = () => this.setState({ isUser: !this.state.isUser })

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        <Login toggleForm={ this.changeUserStatus }/>
      )
    } else {
      return (
        <Signup toggleForm={ this.changeUserStatus }/>
      )
    }
  }

  render() {
    return (
      <div>
        { this.authViewShow() }
      </div>
    );
  }
}

// Now, add the following to Pies.js:

import React, { Component } from 'react';

class PieTable extends Component {

  render() {
    return (
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
}

export default PieTable;

/*
Go to the App.css and add the following for moving the table to the middle:

.pies {
  margin: auto;
}

Now, plug it in to Pies component:
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