/**************************
CODE CHALLENGE 3 - STRINGS
**************************/

/*
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments
*/

// Create a function that takes in a string. Using the splice or slice method, check to see
// if 

const stringCheck = '    Welcome to eleven fifty     ';

const findTheCompany = (str, callback) => {
  str = typeof (str) == 'string' && str.trim().length > 0 && str.trim().length < 30 ? str.trim() : false;
  
  if (str) {
    str = str.replace('eleven fifty', 'Eleven Fifty');
    return callback(false, str);
  } else {
    return callback(true, 'Error: String must not be empty and must be a string type');
  }
}

const fixedString = findTheCompany(stringCheck, (err, message) => {
  if (!err && message) {
    return message;
  } else {
    return {
      error: err,
      message: message
    }
  }
})

console.log(fixedString);


/**************************
PIE CLIENT WALKTHROUGH 3 - CLASS COMPONENTS AND STATE
**************************/

/*
Run through making a functional component for a footer (recap) => make with functional keyword instead of fat arrow for variety

Discuss differences between functional components and class components => class discussion on which is better

Change folder structure (change paths accordingly):
  src
    components
      layout
        AuthForm.js (new file)
        Footer.js
        Navbar.js
      auth
        Login.js (new file)
        Signup.js (new file)
    ...
  
Talk about making login/signup form
*/

/*
Go to layout/AuthForm.js 
 
Add the following:
*/

import React from 'react';

const AuthForm = (props) => {
  return (
    <div>
      <form>
        {/* <h1>{ props.formName }</h1> */}
        <h1>Sign Up</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="emailField" 
            name="email" 
            className="input-field" 
            onChange={ props.changeInputs }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="text"
            id="passwordField"
            name="password"
            className="input-field"
            onChange={ props.changeInputs }
          />
        </div>
        <input type="button" value="Submit"/>
      </form>
    </div>
  )
}

export default AuthForm;

/*
Now, go to App.js and add the following:
*/

import AuthForm from './components/layout/AuthForm';

// render() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <AuthForm/> {/* New file here */}
//       <Footer/>
//     </div>
//   );
// }

// Run your code and see the form
// Notice that it only works for Sign Up.  Let's change that

/*
Add following in App.js file:

Add constructor and super and state:
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

Explain what this is doing
  Constructor not necessary, but common for OOP classes => contains and, well, constructs the class => 
  if constructor only has super(), you will get a warning telling you that you have a useless constructor

  super() is something that brings data in from the parent component => do not go too deep

  state is something that all browsers have (the only thing without is HTTP requests => 
    statelessness [rest]). It is like setting data that the whole site can use => 
    remember in NYT app, nav.style.display = 'none' set that the app would start off as hiding its navbar?  
    State is like this on a grander level.
  
  https://daveceddia.com/why-not-modify-react-state-directly/?utm_campaign=0601modify
*/

/*
Get rid of the AuthForm import.  Add to App.js:

  import Login from './components/auth/Login';
  import Signup from './components/auth/Signup';

  ...

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        Login
      )
    } else {
      return (
        Signup
      )
    }
  }

  ...

  <Navbar/> 
    { this.authViewShow() }
    (Get rid of <AuthForm />)
  <Footer/>

BRIEFLY explain 'this'.

Explain what we are doing.
*/

// Go to Signup.js and add the following:

import React from 'react';
import AuthForm from '../layout/AuthForm';

class Signup extends React.Component {

  handleChange = (e) => {
    console.log(e)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AuthForm changeInputs={ this.handleChange }/>
      </div>
    )
  }
}

export default Signup;

// Explain what we are doing
// Now, go to Login.js:

import React, { Component } from 'react';
import AuthForm from '../layout/AuthForm';

export default class Login extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AuthForm changeInputs={ this.handleChange }/>
      </div>
    )
  }
}

/*
Explain the difference with Component and export default 

Now add the following in Login.js:
*/

// render() {
//   return (
//     <div>
//       <AuthForm
//         formName="Login" {/* New */}
//         changeInputs={ this.handleChange }
//       />
//     </div>
//   )
// }

// Add the same for Signup (with "Sign Up" instead of "Login")

// Add the following to App.js:

changeUserStatus = () => this.setState({ isUser: !this.state.isUser }) // New

authViewShow = () => {
  if (this.state.isUser) {
    return (
      <Login/> // New
    )
  } else {
    return (
      <Signup/> // New
    )
  }
}

// Change the state of isUser from false to true and you should see it go between Sign Up and Login

// Now let's toggle between both forms!
// Change the state back to where isUser is false

authViewShow = () => {
  if (this.state.isUser) {
    return (
      <Login toggleForm={ this.changeUserStatus }/> // New
    )
  } else {
    return (
      <Signup toggleForm={ this.changeUserStatus }/> // New
    )
  }
}

/* Now go to Signup.js and add the following under the <AuthForm/>:

<h6>Login <button onClick={ this.props.toggleForm }>HERE</button> if you have an account</h6>

And add the following for Login.js:

<h6>Register <button onClick={this.props.toggleForm }>HERE</button> if you don't have an account</h6>

The button should toggle between Login and Signup!

Now, go to AuthForm.js:
*/

// const AuthForm = (props) => { // add props
//   return (
//     <div>
//       <form>
//         <h1>{ props.formName }</h1> // new 
//         <div className="input-group">
//           <label htmlFor="email">Email</label>
//           <input 
//             type="text" 
//             id="emailField" 
//             name="email" 
//             className="input-field" 
//             onChange={ props.changeInputs } // new
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input 
//             type="text"
//             id="passwordField"
//             name="password"
//             className="input-field"
//             onChange={ props.changeInputs } // new
//           />
//         </div>
//         <input type="button" value="Submit"/>
//       </form>
//     </div>
//   )
// }
//


// Hey look to tomorrow teacher! Make new netflix object
