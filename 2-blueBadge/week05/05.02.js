/*
/*******************
DAY ONE REACT CHALLENGE
*******************/

/*
BRONZE LEVEL:
Convert the 'StatePropsChallenge' component to a class component.
Use the constructor method to initialize state for
this component.  State should hold 3 key-value pairs:

{
            console : 'Playstation',
            version : 4,
            maker : 'Sony'
        }

Inside the render method, build a button.  This button should
console.log() the state object when it gets clicked.  Good luck!

SILVER LEVEL:
Do all of the above, but make a new functional component called
'PropDisplay' (careful with folder stucture!).  Call this component
three times inside the 'StatePropsChallenge' render method.  Each 'PropDisplay'
component call should be passed a prop, the first is passed 'console',
the second 'version', and the third 'maker'.  Each PropDisplay should 
display the prop it gets passed.  Good luck!

GOLD LEVEL:
Do all of the above, but refactor your render so that instead of calling
PropDisplay three times, you create an array of jsx inside of render.

Find a way to iterate over the state object, with each iteration, create a PropDisplay component, and pass the values in the state one by one. Each PropDisplay component
should have its prop defined dynamically.  You shouldn't have to make a 'console',
'version', and 'maker' prop by hard-coding the their names.  Add the array of JSX to the render
*/



/**************************
CODE CHALLENGE 1 - OBJECTS
**************************/

/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2
*/

// Option 1 (Not Quite Right)
const person = {
  fName: 'Tom',
  lName: 'McClellan'
}

function changePerson(obj, param1, param2) {
  
  let temp = obj.param1;
  obj.param1 = obj.param2;
  obj.param2 = temp;

  return obj
}

newObj = changePerson(person, 'fName', 'lName');

console.log(newObj);

// Option 2 (Better)
const person = {
  fName: 'Tom',
  lName: 'McClellan'
}

const food = {
  food1: 'Steak',
  food2: 'Tacos'
}

const changePerson = (obj, prop1, prop2) => {
  let newObj = Object.assign({}, obj);
  // let newObj = obj;

  let temp = newObj[prop1];
  newObj[prop1] = newObj[prop2];
  newObj[prop2] = temp;

  return newObj;
}
const newObject = changePerson(food, 'food1', 'food2');
console.log(food, "Unchanged Object");
console.log(newObject, 'Changed Object');


/**************************
PIE API WALKTHROUGH 1 - NPM, EXPRESS, POSTMAN
**************************/
/*

Inside JavaScript Library, make a new folder called Pie-Project

Add the react pie-client to the folder

And make a server folder


Folder Structure:
  pie-Project
    pie-client
    server
Navigate to server
npm init => explain what package.json is doing 
Will see this in package.json (add start and dev to scripts): 
{
  "name": "pieapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    // New code below
    "start": "node index.js",
    "dev": "nodemon"
  },
  "author": "",
  "license": "ISC"
}
Explain what start script does (npm start) and what dev does (nodemon)
Go ahead and npm install --save-dev nodemon  (will create a devDependencies key with nodemon inside)
Explain what nodemon does 
npm install express
Explain difference between opening a file path vs. running a server
  Server has hot reloading
  
  More importantly:
    Explain how the internet works
      client <=> server <=> db
      req and res (recall API interaction)
Create index.js file at root level of server
*/

const express = require('express')
const app = express()

app.listen(3000, () => console.log('App is listening on 3000'))

/*
Now create .env file and add PORT = 3000
npm install dotenv
Change index.js to following
*/
require('dotenv').config()

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`)) // BACK TICS!

/*
Create .gitignore file and add following:
  node_modules/
  *.env
Build out own server
Add the following to the folder structure:
server
  public
    index.html
In index.html, add:
<h1>This is working with a web server!</h1>
In index.js, add:
*/

app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.get('/', (req, res) => res.render('index'))

/*
Open index.html in both local path and server (npm run dev)
In Postman, run to see html in output section
In index.js, add:
*/

app.get('/pies', (req, res) => res.send('I love pie!'))

/*
Run in Postman
Now add a controllers folder with piecontroller.js
In piecontroller.js add:
*/

const express = require('express')
const router = express.Router()

// copy from index.js:
app.get('/pies', (req, res) => res.send('I love pie!'))
// change app to router
router.get('/', (req, res) => res.send('I love pie!'))
// explain what the '/' does (localhost:3000/pies/)

// and add to bottom:
module.exports = router

//In index.js, change: 

app.get('/pies', (req, res) => res.send('I love pie!'))
// to
app.use('/pies', pies)
// add add at time of index.js:
const pies = require('./controllers/piecontroller')

// Run in postman

/*********************
ALECX'S NYT WALKTHROUGH
*********************/

/* Node server gitbook Chs. 0-4 */  