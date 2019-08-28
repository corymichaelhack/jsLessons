/**************************
DAY THREE REACT CHALLENGE
**************************/
/* 
BRONZE CHALLENGE

  Use the DayThreeComp to build a component that lets the user type into an input field.
  Make sure that your input field's value is stored in state, and that state shows the value
  in the input field (2-way data binding).  

SILVER CHALLENGE
  
  Do the Bronze Challenge, but add a second input field.  Make sure that its value is also
  managed by state using 2-way binding.  Make an h1 tag below these input fields that shows
  the value of the input field which has the longer text.  Your page may look like the below:

  [this is some text]
  [this is some longer text]
  <h1>this is some longer text</h1>

GOLD CHALLENGE
  
  Create a way for the header tag to alert some one that they need to type something into the inputs to engage with out logic, while keeping the ability to show the value of the longer input in the <h2>. You may need to tear out the initial set up for the conditional rendering it make this work. 
*/

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
