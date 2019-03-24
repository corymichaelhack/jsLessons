/**************************
PIE CLIENT WALKTHROUGH 2 - FUNCTIONAL COMPONENTS
**************************/

// * Review React path to browser,
// * Explain how React Apps can be thought of as 'trees'

/*
 App js is the Trunk of the tree
 Components connecting to App.js are branches
 And Components connecting to our 'branch' components are leaves

 And everything is rendered through App.js, and bootrapped to the browser
 */

// * cd into pie-client
// * npm start

// * Add Auth directory and files to pie-client

/*
components
* Auth
*   Auth.js
*   Auth.css
*/

// * Build out Auth.js

/*
import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {
    render(){
    return(
      <form className="card-like" onSubmit={this.handleSubmit} >
        <h1>Sign In</h1>
        <label className="display-block" htmlFor="email">Email:</label>
        <input className="display-block" type="text" name="email" />
        <label className="display-block" htmlFor="password">Password:</label>
        <input className="display-block" type="password" name="password" />
        <button onClick={this.loginToggle}>Login/Signup</button>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Auth;
*/

// * Build out Auth CSS

/*
    .card-like {
        padding : 1em;
        background-color : whitesmoke;
        border-radius : 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);
    }

    .display-block {
        display : block;
    }

  * discuss what absolute position is doing, top, left, and transform
*/

// * Adding Auth to the App

// * Talk about differences between Class and Functional Components & some benefits of reach

// ! Note - The app won't do anything yet since the click handles are don't exist - Apps will refresh when buttons are clicked - that is expected

// * Update Auth to toggle login / sign up
/*
  * add to Auth.js class - right before declaration

  state = {
    login: true
  }

  * add this just inside render

  let title = this.state.login ? "Login" : "Signup";
let signupFields = !this.state.login
  ? (
    <>
      <label htmlFor="firstName">First Name:</label><br/>
      <input type="text" name="firstName" /><br/>
      <label htmlFor="lastName">Last Name:</label><br/>
      <input type="text" name="lastName" /><br/>
    </>
  )
  : null

* replaced Sign In! h1 with the below:
<h1>{title}</h1>

* add signupFields below password input:
{signupFields}

? What happens if we change login to false?

* discuss 2-way binding, and add the following inside of state:
firstName:'',
lastName: '',
email: '',
password: '',

let's have every input tag grab the value from state.  

* add the following to each <input/>:
value={this.state.whatever}

? why are the inputs locked?


* let's add a changeHandler method inside the class so we can change the values in our state
handleChange = (event) => {
  this.setState({[event.target.id]: event.target.value})
}

* and let's add our onChange handler to each input:
onChange={this.handleChange}

* reiterate what's happening here: 

user input (change) => state updated => Dom changes  

* finally add loginToggle method and use it:

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

? What are we doing here by setting all the strings to empty strings?
? What is the !login doing?


recap what's been built out, and how dynamic content can be created with React
mention to students that the data submission depends upon a server, which has yet to be built out
*/

// * GitBook Chapters 4 - 5