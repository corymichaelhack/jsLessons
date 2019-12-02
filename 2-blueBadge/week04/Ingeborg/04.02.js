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

/************************************************************************
 PIE API WALKTHROUGH 2 - MODELS, SEQUELIZE, POSTGRESQL, PGADMIN, AND CRUD
 ************************************************************************/

/*
************
  PGADMIN
************
    - in PGAdmin, create a new database called 'pieApi'
************
NPM INSTALLATIONS
************
  - in terminal, navigate to server folder and install sequelize and pg
    sequelize: npm install sequelize
      - sequelize is a JavaScript library that we'll use to *manage our postgreSQL database*. Sequelize is an object relational mapper (ORM) - meaning that *it sends our data to our database using JavaScript's object syntax*.
      - sequelize is all about models. Models are how we shape the data we'll be sending to our database. Our models are both the objects that we'll interact with in our application as well as the primary tables that we'll create and manage in our database.
    pg: npm install pg
      - the pg package allows us to write the dialect that sequelize needs to speak to our PostgreSQL database.
      - you don't need to worry too much about what this package does. We don't need to reference/import it to our code anywhere, it simply just allows us to write the dialect sequelize needs to talk to our database.
*/

/*
************
   DB.JS      - CREATE db.js file at root level of server directory
************
*/

// add the following code to db.js:

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, { // add NAME and PASS to .env
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(() => console.log('postgres db is connected'))
  .catch(err => console.log(err));

module.exports = sequelize;

// be sure to add NAME and PASS to .env file.
// NAME is the database name and PASS is your PGAdmin password


/*
************
  MODELS      - CREATE models folder at root level of server directory. Inside of models, create pie.js.
************
server
  models
    pie.js
*/

// add the following code to pie.js

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

// a model represents a table in the database. Here we are creating a table of pie, with table headers of nameOfPie, baseOfPie, crust, timeToBake, servings, rating.

// We use the define method to define mappings between a model and a table. Sequelize will then automatically add the attributes createdAt and updatedAt to it. So you will be able to know when the database entry went into the db and when it was updated the last time. Mapping refers to "The act of determining how objects and their relationships are persisted in permanent data storage, in this case relational databases."


/*
************
  APP.JS
************
*/

// add the following code to app.js

const sequelize = require('./db');

sequelize.sync();
app.use(express.json());

/*
- express.json() is a method built into express to recognize the incoming Request Object as a JSON Object.
  - express.json() returns middleware that only parses json
  What is middleware?
    - Middleware is the methods, functions, and operations that are called between processing the Request and sending the Response in your application method
    - think specifically about POST and PUT requests when talking about express.json()
      - you DO NOT NEED express.json() for GET requests or DELETE requests
      - you NEED express.json() for POST and PUT requests, because in both of those requests you are sending data to the server, and asking the server to accept or store that data (object), which is enclosed in the body (req.body) of that (PUT or POST) request
*/

/*
************
PIE CONTROLLER
************
*/

// go to piecontroller.js

// change this:
const express = require('express');
const router = express.Router();
// to
const router = require('express').Router();

// add:
const Pie = require('../db').import('../models/pie');

// you should ONLY see:
const router = require('express').Router();
const Pie = require('../db').import('../models/pie');

// comment out existing router.get request and add the following:
router.get('/', (req, res) => {
  Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({
      error: err
    }))
})

// The res object represents the HTTP response that an Express app sends back to us when it receives an HTTP request.
// findAll() is a sequelize query method we can use to GET all objects stored in a table from the database.

// run in postman - you should receive '[]' in the response.

// a GET request is used to request data from a specified resource. In this example, we're using the sequelize query method of findAll() and attaching it to our Pie variable that's importing our pie model. Note that our pie variable is also requiring our db.js file. This is to make sure we are successfully authenticated and granted access to the database.


// build the post route. Add the following code:
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

// Our pieFromRequest object is building off of the model we created and that we're grabbing with our Pie variable. THESE NEED TO MATCH.

// we then use the sequelize method of create() and pass in our pieFromRequest object. This builds a new instance of our model and is expecting the values of our keys to be sent through the request body.

// req.body allows you to access the JSON data that was sent in the request. Generally used in POST/PUT requests to send arbitrary-length JSON to the server.


/* make a post request in postman as follows:
 {
    "nameOfPie": "peach",
    "baseOfPie": "fruit",
    "crust": "graham",
    "timeToBake": 50,
    "servings": 8,
    "rating": 5
 }
*/

// The output in postman should show that we successfully created a pie. Our data should now persist in our PGAdmin database as well.

// take the time to build 3 or 4 more pies on your own to get used to sending information through postman and testing routes.

// After building our 3 or 4 more pies, run your get request to query the database for all of the pies that are currently stored.

/*
************
PIE API DEBUGGING CHALLENGE
************
* Group Students in Pods
*/

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

// 3 breaks in each

// Good code:
router.get('/:name', (req, res) => {
  Pie.findOne({
      where: {
        nameOfPie: req.params.name
      }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({
      error: err
    }))
    console.log(req);
});

/*
- req.params searches the URL path for the specified parameter
- above, a request "pies/Peach" to route "pies/:name" has the URL path params of { name: Peach}
- 'where' is telling us where or what parameter we want to query. Here, we're doing the following:
  1. referencing our Pie variable thats importing our pie model
  2. using the sequelize query method findOne()
  3. using 'where' to specify what value we want to reference when querying
  4. since we're searching for a pie based off of it's name, we're grabbing our nameOfPie key (or table header), and then req.params to search the endpoint we're hitting for a name that matches.
*/

router.put('/:id', (req, res) => {
  Pie.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({
      error: err
    }))
});

/*
- req.params searches the URL path for the specified parameter
- above, a request "pies/1" to route "pies/:id" has the URL path params of { id: 1}
- 'where' is telling us where or what parameter we want to query. Here, we're doing the following:
  1. referencing our Pie variable thats importing our pie model
  2. using the sequelize query method update()
  3. by using 'req.body', we are telling our postgres to update our pie with whatever and however many key-value pairs we send in our request's body (currently the grey box in Postman). If we specified an object just as we did in the POST, we would have to update/send the whole object we want to update. The 'req.body' allows us to change one(1) key-value pair if we choose to.
  4. using 'where' to specify what value we want to reference when querying
  5. since we're searching for a pie based off of it's id, we're grabbing our id key (or table header), and then req.params to search the endpoint we're hitting for an id that matches.
*/

/*
************
PIE API DELETE CHALLENGE
************
*/

// add delete functionality
router.delete('/:id', (req, res) => {
  Pie.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({
      error: err
    }))
});