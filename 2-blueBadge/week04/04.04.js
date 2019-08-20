/**************************
CODE CHALLENGE 4


Challenge: 

Given this object, 
Sort through and display the information as shown here:
{Name of Show}
  {image}
{episode number}{episode name}
  {episode synopsis}
{episode number}{episode name}
  {episode synopsis}
{episode number}{episode name}
  {episode synopsis}
{episode number}{episode name}
  {episode synopsis}

**************************/
let netflix = {
  id: 9,
  name: "Super Store",
  image:"random Image",
  season1: {
    seasonInfo: {
      episodeInfo: [
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 1, episodeName: "Pilot" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 2, episodeName: "Magazine Profile" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 3, episodeName: "Shots and Salsa" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 4, episodeName: "Mannequin" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 5, episodeName: "Shoplifter" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 6, episodeName: "Secret Shopper" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 7, episodeName: "Color Wars" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 8, episodeName: "Wedding Day Sale" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 9, episodeName: "All-Nighter" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 10, episodeName: "Demotion" },
        { episodeSynopsis:"This is a show synopsis, I am too lazy to write any more", episode: 11, episodeName: "Labor" }
      ]
    }
  },
  season2: {},
  season3: {}
};

function runThemAll(){

  let name = netflix.name; 
  let img = netflix.image;
  console.log(name+'\n\t'+img); 
  for(let i = 0; i<netflix.season1.seasonInfo.episodeInfo.length; i++){
    let eID = netflix.season1.seasonInfo.episodeInfo[i].episode;
    let eName = netflix.season1.seasonInfo.episodeInfo[i].episodeName;
    let eSyn = netflix.season1.seasonInfo.episodeInfo[i].episodeSynopsis; 
    console.log(eID+' '+ eName +'\n\t'+eSyn );
  }
}

runThemAll();




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
//sequelize is allowing us to create a table called user, with 
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
//remeber app.use allows us to use some middleware. This one needs the parameter for the url and the router that this parameter will lead to 
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
//requests come with something called a header. These are like headers for an essay, they give you the context of what will be in our request. We need to know the origin of the request, where did the request come from? asterik means it allows requests from anywhere for now. the allowed methods are the methods this server is allowed to accept. We only want CRUD for now but there are 38 total http methods we can use as well. And the headers are the just which headers we are allowed to use when sending a request. These headers indicate what is inside of our request, and can include the content type - usually a json - and the authorization of our request. 

// In index.js:
app.use(require('./middleware/headers'))

// npm install bcryptjs
// npm install jsonwebtoken


// In usercontroller.js:
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
