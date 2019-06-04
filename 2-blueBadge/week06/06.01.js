// * Connect Pie API and Client

/*
  * build token handler method in App.js
    
  storeSessionToken = (token) => {
    this.setState({
        sessionToken : token
    })
  }

  * connect signup & login in Auth.js
    handleSubmit = (event) => {
        event.preventDefault();

        let url = this.state.login ? 'http://localhost:3005/auth/signin' : 'http://localhost:3005/auth/signup';

        fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.props.tokenHandler(data.sessionToken)
        })
        .catch(err => console.log(err));
    }

  complete pie fetch & replace mock data
  * add contructor to Pies.js and add empty array called 'pies'


    * First new additions

    constructor() {
        super();

        this.state = {
            pies : []
        }
    }

    componentDidMount = () => {
        this.fetchPies();
    }

    fetchPies = () => {

    }

    * flesh out fetchPies
    fetchPies = () => {
        let url = 'http://localhost:3005/pies';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pies: data
                })
            })
            .catch(err => console.log(err));
    }

    * adjust pieRows to .map() over this.state.pies

    * Tear out testData

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