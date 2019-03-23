/**************************
PIE CLIENT WALKTHROUGH 2 - FUNCTIONAL COMPONENTS
**************************/
/*
// review data flow in React, 
//talk about how App.js is essentially an entire webpage,
//circle and discuss how smaller, more granular parts of the site
//are component 'leaves' in our folder 'tree'--App.js is our 'stem'

cd into pieclient
//add to project folder structure as below:
components
  Auth
    Auth.js
    Auth.css

//lets add the following inside Auth.js:
import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {
    render(){
    return(
      <form className="cardLike" onSubmit={this.handleSubmit}>
        <h1>Sign in!</h1>
        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" /><br/>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" /><br/>
        <button onClick={this.loginToggle}>Login/Signup Toggle</button><br/>
        <button type="submit">Submit User Data</button>
      </form>
    )
  }
}

export default Auth;

//discuss Component import, 
//class benefits over functional component (dynamic vs static), 
//empty onClick handlers,
//review labels and inputs
//draw their attention to the fact that JSX again looks like HTML

//let's import and use this in App.js, just render the component below the Navbar

//let's add to Auth.css:
.cardLike{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//discuss what absolute position is doing, top, left, and transform

//let's update Auth to toggle login/signup:
//add to Auth.js class
state = {
    login: true
  }
//add this just inside render
let title = this.state.login ? "Login" : "Signup";
let signupFields = !this.state.login 
  ? (
    <>
      <label htmlFor="firstName">First Name:</label><br/>
      <input type="text" id="firstName" /><br/>
      <label htmlFor="lastName">Last Name:</label><br/>
      <input type="text" id="lastName" /><br/>
    </>
  ) 
  : null

//replaced Sign In! h1 with the below:
<h1>{title}</h1>
//add signupFields below password input:
{signupFields}

//show that by changing the login value in state, Auth will conditionally render content


//discuss 2-way binding, and add the following inside of state:
firstName:'',
lastName: '',
email: '',
password: '',

//let's have every input tag grab the value from state.  add the following to each <input/>:
value={this.state.whatever}

//show students that now the inputs are locked.  why is this?

//let's add a changeHandler method inside the class:
handleChange = (event) => {
  this.setState({[event.target.id]: event.target.value})
}

//and let's add our onChange handler to each input:
onChange={this.handleChange}

//reiterate what's happening here: a change is detected, state is updated, that updated state is reflected in the DOM

//finally, let's add our loginToggle method and use it:

loginToggle = (event) => {
  event.preventDefault();
  const login = this.state.login;
  this.setState({
    login: !login,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
}

//inside the login/signup toggle button:
onClick={this.loginToggle}

//recap what's been built out, and how dynamic content can be created with React
//mention to students that the data submission depends upon a server, which has yet to be built out
*/

 /*
 Gitbook parts 4-5
 */
