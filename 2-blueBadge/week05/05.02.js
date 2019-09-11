/**********************************************
Node Challenge 2 - Unauthorized CRUD 
( Sequelize, Express, CRUD )
**********************************************/

/*
  BRONZE CHALLENGE:
  Make a new '/create' endpoint in the animal-controller file.  It should save all the data
  from the animal model to the database, including # of legs, boolean predator value, and its name.
  If the animal is correctly saved in the database, inform the user.  Otherwise, alert the user if 
  there's an error.
  Make another '/' endpoint that will return all the animals created in the database. Like the others, send appropriate statuses based on if the request succeeds or not.

  SILVER CHALLENGE:
  Complete the bronze challenge, then make a new '/delete' endpoint that will delete an animal from
  the database.  However you complete this challenge, a request must be able to specify which animal
  needs to be deleted.  If the delete was successful, inform the user, otherwise alert the user to 
  an error.

  GOLD CHALLENGE:
  Complete the silver challenge, but make a new '/update' endpoint that will let a request update
  animal data in the database.  Like with the silver challenge, the request must be able to specify
  which animal needs to be updated.  On success, inform the user, on failure, alert appropriately.
*/


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

              const Auth = () => {
                  return(
                    <form className="card-like">
                      <h1>Sign In</h1>
                      <label className="display-block" htmlFor="email">Email:</label>
                      <input className="display-block" type="text" name="email" />
                      <label className="display-block" htmlFor="password">Password:</label>
                      <input className="display-block" type="password" name="password" />
                      <buttonLogin/Signup</button>
                      <button type="submit">Submit</button>
                    </form>
                  )
              }

              export default Auth;
*/
             
// * Build out Auth CSS
/*
              .card-like {
                padding : 1em;
                background-color : whitesmoke;
                border-radius : 15px;
                width: 10vw;
                margin: 25vh auto;
                text-align : center;
                display : flex;
                flex-direction: column;
              }

*/

//* discuss how the shorthand margin property is positioning the div

// * Add Auth to the App, right under the <Navbar />

// * Update Auth to toggle login / sign up


/*
  * add to Auth.js - right before declaration

    Initialize state of login with an initial value of false

            let [ login, setLogin ] = useState(true);

  * Then modify <h1> to render a different title based on what the value of login is

            <h1>{ login ? 'Login' : 'Sign Up ' }</h1>

  * Add ability to toggle additional fields for sign up - also using ternary - add these under the title

            {x`
                login ? null 
                : <React.Fragment>
                <label htmlFor="firstName">First Name :</label>
                <input type="text" name="firstName" />
                <label htmlFor="lastName">Last Name :</label>
                <input type="text" name="lastName" />
                </React.Fragment>
            }

            Explain the React.Fragment is a clever way to wrap JSX in one parent, without adding additional HTML bloat

? What happens if we change login to false?

* discuss 2-way binding, and add the following below the login state - as a value changes in the input field, it changes in the state. array destructuring 

            let [ firstName, setFirstName ] = useState('');
            let [ lastName, setLastName ] = useState('');
            let [ email, setEmail ] = useState('');
            let [ password, setPassword ] = useState('');

let's have every input tag grab the value from state.

* add the following to each <input/>:

            value={ firstName/lastName/email/password }

? why are the inputs locked? 

Oh no! bc we added a value to each one of these fields, and we set those values with use state, were giving a permanent value of blank. The field is locked!

Take a moment to modify the calls to useState() give them some default values and recheck the browser - we have values in the inputs, but we cant change them - this is one way data binding
app data -> browser

* Add Change handlers to each input, relying on the set[value] methods from the useState() calls

* and let's add our onChange handler to each input:

            onChange={(e) => setValue(e.target.value)}

Leave default values and go test - you can now type in all of the inputs
Explain that -this- is TWO way data binding, 
app data <- browser ( specifically user input )
app data -> browser

The app is updating in real time! That's why we can even see the input's values changing

* reiterate what's happening here - as this is the basic flow of React

user input (change) => state updated => Dom updated

* Remove default values from useState() calls

* finally add loginToggle method and use it:

            const loginToggle = (event) => {
                event.preventDefault();
                setLogin(!login);

                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
            };


? What are we doing here by setting all the values to empty strings?
? What is the !login doing?

recap what's been built out, and how dynamic content can be created with React
mention to students that the data submission depends upon our server, which we have yet to connect
*/

// * GitBook Chapters 4 - 5