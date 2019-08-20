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
PIE API WALKTHROUGH 2 - MODELS, SEQUELIZE, POSTGRESQL, PGADMIN, AND CRUD
**************************/
/*
RECAP:
npm
package.json/package.lock.json/node_modules
nodemon
express (node index.js, npm run dev, nodemon)
how internet works
.env file
.gitignore file
ran a server (express)
served up a static file
ran on Postman
parsed into controller file
*/
/*
In PGAdmin, create new database => call it pieApi (make sure your postgreSQL password is implemented) 
pgadmin is the gui(graphical user interface) for our db (postgres)

npm install sequelize (explain => link between server and db)

Sequelize is an ORM, an object relational mapper. This is a tool that allows us to write SQL (db language) commands and interact with that db in javaScript

npm install pg ( gives us the ability to connect to our postgres database)
Allows us to connect to a postgres database. When we give sequelize a dialect, we will need a package that helps us connect to that dialect


app.use(express.json()) ( allows us to read a request body by dealing with the json format that the request comes in as)


Create db.js file and add:
*/

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
  host: 'localhost', 
  dialect: 'postgres'
})

sequelize.authenticate() 
  .then(() => console.log('postgres db is connected'))
  .catch(err => console.log(err))

module.exports = sequelize;

/*
Tell them to add NAME and PASS to .env file
create models folder and add pie.js file:
*/

module.exports = (sequelize, DataTypes) => {
  const Pie = sequelize.define('pie', {
    nameOfPie: {
      type: DataTypes.STRING,
      allowNull: false    
    }, 
    baseOfPie: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    crust: {
      type: DataTypes.STRING,
      allowNull: false   
    },
    timeToBake: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  return Pie;
};    

/*
Explain how model is structure for table
Now go to index.js and add the following:
*/

const sequelize = require('./db');
const bodyParser = require('body-parser')

sequelize.sync();
// sequelize.sync({ force: true }); // explain use here
app.use(bodyParser.json())

/*
Go to piecontroller.js
*/

//Change this:
const express = require('express');
const router = express.Router();
// to
const router = require('express').Router();

// and add:
const sequelize = require('../db')
const Pie = sequelize.import('../models/pie')
// and then change to
const Pie = require('../db').import('../models/pie');

//-----------------

// SO you should ONLY see:
const router = require('express').Router();
const Pie = require('../db').import('../models/pie');

// comment out the existing router.gets and add the following:
router.get('/', (req, res) => {
  Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err }))
})

/*
Explain how the GET works => the GET is the http request that will trigger this router action. If we send a request to this endpoint with another request we havent specified, nothing will happen. Inside of the request, were using Sequelize to create a new sql command to find all pies in the pie table; 

note that if you run it, you should see only an empty array ([])

Now build out the POST:
*/

router.post('/', (req, res) => {
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
Note that the pieFromRequest object is building off of the model => THEY HAVE TO MATCH!
We then use the .create() to build a new instance from the model
Run and use the post and in the body section of Postman, type out:
{
	"nameOfPie":"peach",
	"baseOfPie":"fruit",
	"crust": "graham",
	"timeToBake": 50,
	"servings": 8,
	"rating": 5
}
It should show in the output and persist in PGAdmin
If you then run the GET, you should see it show up there as well.
Have the students build out multiple pies
*/

/**************************
PIE API DEBUGGING CHALLENGE
**************************/

// * Group Students in Pods

// Broken code:
// router.get('/name', (req, res) => {
//   Pie.findone({ where: { nameOfPie: req.params.nameOfPie }})
//     .then(pie => res.status(200).json(pie))
//     .catch(err => res.status(500).json({ error: err}))
// })

// router.put('/:id', (req, res) => {
//   pie.update(req.body, { where: { id: req.body.id }})
//     .then(pie => res.status(200).json(pie))
//     .catch(err => res.json(req.errors))
// })

// Good code:
router.get('/:name', (req, res) => {
  Pie.findOne({ where: { nameOfPie: req.params.name }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err }))
});

router.put('/:id', (req, res) => {
    Pie.update(req.body, { where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json({ error : err }))
});

/**************************
PIE API DELETE CHALLENGE
**************************/
// Challenge students to add DELETE functionality:
router.delete('/:id', (req, res) => {
    Pie.destroy({ where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json({ error : err }))
});