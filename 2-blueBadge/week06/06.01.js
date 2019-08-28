// * Connect Pie API and Client

/*
  * build token handler method in App.js
    
  const storeToken = (token) => {
    setToken(token);
  };

  * pass as prop to <Auth />
  - you will likely need to add props to the Auth component's declaration


  * connect signup & login in Auth.js
    const handleSubmit = (event) => {
        event.preventDefault();

        let url = login ? 'http://localhost:4000/auth/signin' : 'http://localhost:4000/auth/signup';

        let reqBody = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : passwordcon
        }

        fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(reqBody)
        })
        .then(res => res.json())
        .then(data => props.storeToken(data.sessionToken))
        .catch(err => console.log(err))
    };

  * complete pie fetch & replace mock data
  
    add call to useState and create any empty array for Pies
    create a call to useEffect as well - you will need to import this - use state should call fetchPies(), and the second arg should be an empty array

    * First new additions

    const [ pies, setPies ] = useState([]);
    
    useEffect(() => fetchPies(), []);

    * flesh out fetchPies

    const fetchPies = () => {
        let url = 'http://localhost:4000/pies';

        fetch(url)
            .then(res => res.json())
            .then(data => setPies(data))
            .catch(err => console.log(err));
    }

    * adjust pieRows to .map() over pies

 */

/* Add Logout Functionality

* Back in App.js

Create a clearToken method and pass it to the Navbar as a prop

      const clearToken = () => {
        setToken(undefined);
    }

* In Navbar - add props as a parameter of the component - pass the clearToken prop to Logout

* In Logout - add props as a parameter of the component - add an onClick handler to the logout <img />
*/


// * Node Challenge

/**********************************************
Node Challenge 1 - User Auth
( Sequelize, Express, jsonwebtoken, bcrypt )
**********************************************/

/*
Students should clone the repo linked below inside
their blue-badge-challenges folder:
https://github.com/tshelton5000/blue-mon-tues-server-challenge

Make sure they have a database set up with the name:
'blue-server-challenges'.  They need to use their own
un/pw for pgAdmin.
*/

/*
BRONZE DESCRIPTION:
  Design a '/user/create' endpoint that will let the user
  send a new user object through the server to the database. If successful,
  the server should store the user object sent in the database, and send
  a response to the user with a 200 status code and the user
  object just saved.  If the operation fails, the 
  server should respond with a 500 status code and an error
  message back.
  
  Note :: You do not need to use bcrypt.

SILVER DESCRIPTION:
  Complete the bronze level challenge above, but this time 
  create a '/user/login' endpoint that will let the user send
  a user object through the server and check with an existing
  user in the database.  On success, the user object should
  be sent back with an appropriate status code.  On failure,
  an appropriate status code and an error message should be sent.

  Note :: You do not need to use bcrypt.

GOLD DESCRIPTION:
  Complete the silver level challenge above, but make sure
  that passwords are saved encrypted.  When the '/user/create'
  and '/user/login' endpoints send the user information back,
  make sure that information contains a token using
  jwt (this uses the jsonwebtoken dependency).

  Note :: You will modify Bronze and Silver to use bcrypt and implement tokens using jsonwebtoken
*/

// * Blue Badge Planning First Planning Meeting - Discussing Options

/*  Students at this point should have a selection of idea to consider

* Considerations 
  - How many CRUD tables would be needed to accomplish their goals

  - Any 3rd Party APIS a project might need

  - Identify what 1.0 would look like for these project ideas
 
  - Any stretch goals for project ideas.

  ! Students should choose idea to one for tomorrow's Planning Meeting
 */