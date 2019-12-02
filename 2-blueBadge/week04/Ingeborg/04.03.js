// * JavaScript Challenge

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

// ***************************************************************************

/**************************
PIE API WALKTHROUGH 3 - AUTH
**************************/

// In the models folder, create a new file called user.js

// add the following code to user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      firstName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
  })
  return User;
}

/*
************
USER CONTROLLER      - CREATE usercontroller.js file in controllers folders
************
*/

// add the following code to usercontroller.js
const router = require('express').Router();
const User = require('../db').import('../models/user');

module.exports = router;

/*
************
APP.JS
************
*/

// import usercontroller.js to app.js
const user = require('./controllers/usercontroller');

app.use('/auth', user);


/*
************
MIDDLEWARE        - CREATE middleware folder at root level of server directory
************
*/

// add the following code to headers.js
module.exports = (req, res, next) => {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  next();
};

/*
- access-control-allow-orgin is a response header that tells the browser to allow code from any origin
- access-control-allow-methods is a response header that specifies the method or methods allowed when accessing the resource in response to a preflight request
- access-control-allow-headers is a response header that's used in response to a preflight request that indicates which HTTP headers can be used during the actual request
PREFLIGHT REQUESTS - A preflight request is a CORS request that checks to see if the CORS protocol is understood.
  - a preflight request is automatically issued by a browser.
      - ex. a client might be asking a server if it would allow a DELETE request before actully sending the DELETE request.
CORS (Cross-Origin Resource Sharing) - a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.
*/

/*
************
APP.JS
************
*/

// in app.js add the following code:

app.use(require('./middleware/headers'));

/*
************
NPM INSTALLS        - bcryptjs and jsonwebtoken
************
npm install bcryptjs
npm install jsonwebtoken
*/

/*
************
USERCONTROLLER.JS
************
*/

// add the following code to usercontroller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// SIGNUP
router.post('/signup', (req, res) => {
  User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
      /*
      - sending plain text passwords to a database is extremely insecure, so we need to use something like bcryptjs to send a hashed password to our database
      - hashing: process of storing passwords in hashed form. This guards against the possibilty of someone gaining unauthorized access to our database and retrieving user passwords.
          - hashing performs a one-way password transformation on a password, turning it into another string called a hashed password.
              - one-way transformation basically means that it's practically impossible to turn the hashed password back into the original password.
                  - there are complex hashing algorithms used to unhash a password, but it's very hard to do.
          - the hashed password value is not encrypted before it's stored in the database. When a user attempts to login, it takes the supplied password, performs a similar one-way hash and compares it to the database value, and checks if the passwords match.
      - salting: 10 stands for the number of times the password will be 'salted'. A salt is basically random data that is unique to each user, that is saved with the users password and is used in the hashing process of both storing and verifying the password.
      */
  })
  .then(
      createSuccess = (user) => {
          let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
          /* 
          - when we create a user, we're signing a token to that user based off their user id. That token expires in 1 day
          - 60 seconds, 60 minutes, 24 hours = 1 day. 60*60*24 gives us 86,400, which is how many seconds there are in a day.

          What is a token? 
            - A JWT is compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
            - Think of the token as a stamp or bracelet at an event. 
          
          Here are some scenarios where JSON Web Tokens are useful:
            - Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
            - Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
          */
          res.json({
              user: user,
              message: 'user created',
              sessionToken: token
          })
      },
      createError = err => res.send(500, err)
  )
})

// add JWT_SECRET to .env file
// go to postman and create a user

// add the following code to usercontroller.js

// SIGNIN
router.post('/signin', (req, res) => {
  User.findOne({
      where: {
          email: req.body.email
      }
  })
  .then(user => {
      if(user){ // if we succesfully find a user with an email that matches
          bcrypt.compare(req.body.password, user.password, (err, matches) => { // comparing the password sent in the request body to the users password
              if(matches){
                  let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60*60*24 })
                  res.json({
                      user: user,
                      message: 'successfully authenticated user',
                      sessionToken: token
                  })
              } else {
                  res.status(502).send({ error: 'bad gateway' }) // 502 server error response code idicates that the server, while acting as a gateway, received an invalid response
              }
          })
      } else {
          res.status(500).send({ error: 'failed to authenticate' }) // 500 server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request
      }
  }, err => res.status(501).send({ error: 'failed to process' })) // 501 server error response code indicates that the server does not support the functionality required to fulfill the request
})

/*
************
MIDDLEWARE     - CREATE validate-session.js file in middleware folder
************
*/

// add the following code to validate-session.js:
const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

const validateSession = (req, res, next) => {
  const token = req.headers.authorization; // looks for our token in the authorization headers. Once we actually build a client, we can store our token in local storage, and that token will stay in local storage until it expires. Postman is acting as our client during the development of our server, so we'll have to pass that token into postman as our authorization header when trying to post with routes requiring validation
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // we need to verify and decode the token
      if(!err && decoded){ // if we don't receive an error and the token is succesfully decoded
          User.findOne({ // then find a user who's id matches the id that was assigned to that specific users id upon signup/signin
              where: {
                  id: decoded.id // then find a user who's id matches the id that was assigned to that specific users id upon signup/signin
              }
          }, console.log(decoded))
          .then(user => {
              if(!user) throw 'err'
              req.user = user // setting the request user to the user that was verified via the token. If there is no user that matches, throw an error
              // console.log(req.user)
              return next() // next jumps us out of our callback function and the code below return next() will be unreachable. This prevents us from triggering the callback function a second time.
          })
          .catch(err => next(err))
      } else {
          req.errors = err
          return res.status(500).send('Not authorized')
      }
  })
}

module.exports = validateSession;

/*
Go to piecontroller.js file:
*/

// add the following code in piecontroller.js:

const validateSession = require('../middleware/validate-session');

// add validateSession as additional parameter after path ('/') for every endpoint that is not a GET; example:
router.post('/', validateSession, (req, res) => {
  const pieFromRequest = {
      nameOfPie: req.body.nameOfPie,
      baseOfPie: req.body.baseOfPie,
      crust: req.body.crust,
      timeToBake: req.body.timeToBake,
      servings: req.body.servings,
      rating: req.body.rating
  }

  Pie.create(pieFromRequest)
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
})

/*
Test in Postman:
create or signin as a user
Grab token from output
Go to headers and create Authorization with the token as the value
Toggle between on and off to see if functionality is based on auth
*/