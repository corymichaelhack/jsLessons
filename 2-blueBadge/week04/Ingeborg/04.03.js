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
/*
RECAP:
sequelize
postgres
pgAdmin
bodyParser
* CRUD
*/
/*
In your models folder, create a new file called user.js
*/

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define ('user', {
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

// Now make a usercontroller.js file:

const router = require('express').Router()
const User = require('../db').import('../models/user')

/* 
Now go to your index.js and add the following:
*/

const user = require('./controllers/usercontroller')
// More code here
app.use('/auth', user)

/* 
If you run it, it will throw an error because userconroller is empty
Create middleware folder with headers.js inside:
*/

module.exports = (req, res, next) => {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  next();
};

// In index.js:
app.use(require('./middleware/headers'))

// In usercontroller.js:
// Delete app.use('/auth', user)
// npm install bcryptjs
// npm install jsonwebtoken


// Then add:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

router.post('/signup', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(
      createSuccess = (user) => {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

        res.json({
          user: user,
          message: 'user created',
          sessionToken: token
        })
      },
      createError = err => res.send(500, err)
    )
})

module.exports = router

/*
In .env file, add JWT_SECRET
Run code and see if you add a user to your db
In usercontroller.js (above module.exports = router): 
*/

// signup code here

router.post('/signin', (req, res) => {
  User.findOne({ where: { email: req.body.email }})
    .then(user => {
        if (user) {
          bcrypt.compare(req.body.password, user.password, (err, matches) => {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
              res.json({
                user: user,
                message: 'successfully authenticated',
                sessionToken: token 
              })
            } else {
              res.status(502).send({ error: 'bad gateway' })
            }
          })
        } else {
          res.status(500).send({ error: 'failed to authenticate' })
        }
      },
      err => res.status(501).send({ error: 'failed to process'})
    )
})

/*
Now add validation-session.js in middleware folder:
*/

const jwt = require('jsonwebtoken')
const User = require('../db').import('../models/user')

const validateSession = (req, res, next) => {
  const token = req.headers.authorization
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (!err && decodedToken) {
      User.findOne({ where: { id: decodedToken.id }})
        .then(user => {
          if (!user) throw 'err'
          req.user = user
          return next()
        })
        .catch(err => next(err))
    } else {
      req.errors = err
      return res.status(500).send('Authorized');
    }
  })
}

module.exports = validateSession

/*
Go to piecontroller.js file:
*/

const validateSession = require('../middleware/validate-session')

// add validateSession as additional parameter after path ('/') for every endpoint that is not a GET; example:

//                    vvv
router.post('/', validateSession, (req, res) => {
  if (!req.errors) {
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
  } else {
    res.status(500).json(req.errors)
  }
})

/*
Test in Postman:
  create or signin as a user
  Grab token from output
  Go to headers and create Authorization with the token as the value
  Toggle between on and off to see if functionality is based on auth
*/
