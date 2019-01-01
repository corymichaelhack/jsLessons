/**************************
CODE CHALLENGE 2 - ARRAYS
**************************/

/*
Given 2 arrays:
[10,20,30,40,50,70]
[5,3,2,5]

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them.

If the first array has more values than the second, return that same number
*/

const tensArray = [10,20,30,40,50,70];
const onesArray = [5,3,2,5];

const multiplyValues = (arr1 = [], arr2 = []) => {
  // is an expression that checks the value and type of the arr1 given, then puts that value in that param
  arr1 = typeof arr1 == 'object' && arr1 instanceof Array && arr1.length > 0 ? arr1: false;
  arr2 = typeof arr2 == 'object' && arr2 instanceof Array && arr2.length > 0 ? arr2: false;
  
  let newArray = [];
  
  if (arr1 && arr1) {
    // loop over the first array
    for (let i = 0; i < arr1.length; i++) {
      if (arr2[i] == undefined) {
        newArray.push(arr1[i] * 1)
      } else {
        newArray.push(arr1[i] * arr2[i])
      }
    }
    return newArray
  } else {
    return 'Error: Please provide valid arrays'
  }
}

let funArr = multiplyValues(tensArray, onesArray);
console.log(funArr)

/*
Typeof vs Instanceof
What does typeof do again?  What do you think instanceof does?  Are both necessary?  No, but it is better safe than sorry to include them.  Typeof sets it to 'object'; why?  If arrays and objects both give the same typeof answer, including instanceof helps solidify that we are looking for an array.  

Instance of checks the prototype property of a constructor => here, it shows us that we are testing that we have an Array.  The capital 'A' Array is a constructor.  We can append classes to them (like we did with Object.assign() yesterday).  These constructors, at their root, simply give the type that they are working with--Array means that we can ONLY work with arrays.

So by including both typeof and instanceof, we are checking the type to make sure it is nothing other than an array in multiple ways.  Again, is this necessary?  No, but helpful.
*/

console.log([] instanceof Array); //true
console.log(typeof []); // object

console.log({} instanceof Object); //true
console.log(typeof {}); // object

/*
Ternary operators (recap) 
arr1 = typeof arr1 == 'object' && arr1 instanceof Array && arr1.length > 0 ? arr1: false;

same as

if (typeof arr1 == 'object && arr1 instanceof Array == true && arr1.length > 0) {
  ...
}
*/

/**************************
PIE CLIENT WALKTHROUGH 2 - FUNCTIONAL COMPONENTS
**************************/
/*
//review data flow in React, cd into pieclient
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

//discuss Component import, class benefits over functional component (dynamic vs static), empty onClick handlers

//let's import and use this in App.js, just render the component below the Navbar

//let's add to Auth.css:
.cardLike{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

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
