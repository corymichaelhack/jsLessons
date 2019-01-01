/**************************
REACT CHALLENGE 1
**************************/



/**************************
POSTGRES AND PGADMIN INSTALL
**************************/

/**************************
PIE API WALKTHROUGH 1 - NPM, EXPRESS, POSTMAN
**************************/
/*
Folder Structure:
  pieApi
    client
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