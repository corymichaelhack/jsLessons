// * JavaScript Challenge

/**************************
CODE CHALLENGE 2 - ARRAYS
**************************/

/*
Given 2 arrays:
[10,20,30,40,50,70]
[5,3,2,5]

Create a function that multiplies 'like' indexes ([0] with [0], [1] with [1], etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them.

If the first array has more values than the second, return that same number


*/

const tensArray = [10,20,30,40,50,70];
const onesArray = [5,3,2,5];

const multiplyValues = (arr1, arr2) => {
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

// ***************************************************************************

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
ran on Postman
parsed into controller file
*/
/*
In PGAdmin, create new database => call it pieApi (make sure your postgreSQL password is implemented)
npm install sequelize (explain => link between server and db)
npm install pg (explain => for access to postgres)
npm install body-parser (explain => allows us to use req.body)
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
}

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
Explain how the GET works; note that if you run it, you should see only an empty array ([])
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