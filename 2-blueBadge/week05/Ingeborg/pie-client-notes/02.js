/**************************
PIE CLIENT WALKTHROUGH 2 - Internal State, Conditional Rendering, and Data Binding
**************************/

// * Review React path to browser,
// * Explain how React Apps can be thought of as 'trees'

/*
 App js is the Trunk of the tree
 Components connecting to App.js are branches
 And Components connecting to our 'branch' components are leaves

 And everything is rendered through App.js, and bootstrapped to the browser
*/

// * cd into pie-client
// * npm start

/*
ANCHOR Auth
AUTHORIZATION
************
    Folder Structure:
        pie-client
            src
                components <-------- CREATE: in VSCode
                    Auth <-------- CREATE: in VSCode
                        - Auth.js <-------- CREATE: in VSCode
                        - Auth.css <-------- CREATE: in VSCode
    - our Auth file (or component) will allow users to change data in input fields of a signup form
        - eventually, it will allow us to reach out and communicate with our backend (server)
*/

import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {

    return (
        <div>
            <form>
                <h1>Login/Signup</h1>
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value='email' />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value='password' />
                <br/>
                <button>Login/Signup Toggle</button>
                <br/>
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;

//---------------------------------------------------------------------------------------------------------------------

import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {
    // ! NEW CODE
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    return (
        <div>
            <form>
                <h1>Login/Signup</h1>
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                {/* !!! NEW CODE: ONCHANGE HANDLER
                    - if we take out onChange handler, the value is locked because the value of email is an empty string.
                    - if we change the value to 'test string', email input should say test string but the value is still locked. This is because we're not using setEmail anywhere. We're never letting the user change the value of email. If the value of the input field is the value of the email variable, it's always locked to test string
                    - onChange handler takes a callback function. Here we're using an anonymous arrow function and passing it an 'event' parameter. It then calls our setEmail function from our state, and is changing our state variable 'email' to whatever the target value of our event is
                    - this is whats known as two way data binding: the data comes in and changes the state variable via setEmail, and the state variable is tied to the input field via a value attribute. this is essentially a circuit. Input is the start of the circuit, the state change via setEmail is the midpoint, and the value of the state variable comes back to the input field after the state is changed
                */}
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                {/* don't include login toggle in initial setup */}
                <button>Login/Signup Toggle</button>
                <br/>
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;

// import and call in App.js

// show off auth component in React Devtools - show state variables

/*
ANCHOR define title function
************
  title()
************
*/

const title = () => {
    return login ? 'Login' : 'Signup';
    // if login is true, return 'Login'. If login is false, return Signup
}

/*
    - Replace 'Login' string in <h1> with {title()}
    - change useState value of login to false to check to see if the function is working
*/

//---------------------------------------------------------------------------------------------------------------------

import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true); // toggle here!!!!

    return (
        <div>
            <form>
                {/* ! NEW CODE */}
                <h1>{title()}</h1>
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button>Login/Signup Toggle</button>
                <br/>
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;

/*
ANCHOR define loginToggle function
************
loginToggle()
************
*/

const loginToggle = (event) => {
    // takes an event parameter so we can stop the page from reloading on form submission
    event.preventDefault();

    // set login to the be opposite of it's current value by using our means of changing/updating our state variable
    setLogin(!login);

    // clear all current values when toggling between the login and signup forms
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
}

// add onClick to login/signup toggle button

//---------------------------------------------------------------------------------------------------------------------

import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true); // toggle here!!!!

    return (
        <div>
            <form>
                <h1>{title()}</h1>
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                {/* !! NEW CODE !! */}
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br/>
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;

/*
ANCHOR define signupFields function
************
signupFields()
************
*/

const signupFields = () => !login ?
// if login is false, we also want to show additional input fields. If login is true, show null (or nothing)
// since React uses JSX, we can include our HTML lookalike code right in functions, ternaries, etc, to show additional code based on certain values
    (
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <br/>
            <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <label htmlFor='lastName'>Last Name:</label>
            <br/>
            <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
    ) : null;

// call signupFields() under <h1> using interpolation

//---------------------------------------------------------------------------------------------------------------------

import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    return (
        <div>
            <form>
                <h1>{title()}</h1>
                {/* !! NEW CODE !! */}
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br/>
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;

//---------------------------------------------------------------------------------------------------------------------
/* ANCHOR end result Auth.js
************
 AUTH.JS
************
*/
import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {
  // Storing values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  // writing logic
  const title = () => {
    return login ? 'Login' : 'Signup';
  }

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  const signupFields = () => !login ?
    (
      <div>
        <label htmlFor='firstName'>First Name:</label>
        <br/>
        <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br/>
        <label htmlFor='lastName'>Last Name:</label>
        <br/>
        <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
    ) : null;


  return (
    <div>
      <form>
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor='email'>Email:</label>
        <br/>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <label htmlFor='password'>Password:</label>
        <br/>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button onClick={loginToggle}>Login/Signup Toggle</button>
        <br/>
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  );
};

export default Auth;

/*
ANCHOR Auth component CSS
************
 AUTH.CSS
************
    input {
        border: none;
        border-radius: 5px;
        background-color: lightgrey;
        height: 40px;
        width: 300px;
        text-indent: 5px;
        margin-bottom: 1em;
        margin-top: 1em;
        font-size: 18px;
    }
    input:focus {
        outline: none;
        background-color: grey;
        color: white;
    }
    button {
        margin-top: 1em;
        border: none;
        height: 50px;
        width: 200px;
        background-color: lightslategray;
        color: white;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
*/

/*

? What are we doing here by setting all the values to empty strings?
? What is the !login doing?

recap what's been built out, and how dynamic content can be created with React
mention to students that the data submission depends upon our server, which we have yet to connect
*/

// * Canvas Modules JSX, useState, and useEffect.