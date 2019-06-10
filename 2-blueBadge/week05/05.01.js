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
    server
    client

Navigate to server

npm stands for node package manager. Its used for managing packages that we use to build our api, our Node.js application. 

npm init => 
Will see this in package.json (add start and dev to scripts): 
{
  "name": "pieapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    // ADD THIS CODE BELOW! 
    "start": "node index.js",
    "dev": "nodemon"
  },
  "author": "",
  "license": "ISC"
}

Explain what start script does (npm start) and what dev does (nodemon)
npm start is what script or file will be run first when this command is entered. 
dev indidates running the server in dev mode, and with what tool. Nodemon allows us to make changes to our server without having to restart the server everytime

Go ahead and npm install --save-dev nodemon  (will create a devDependencies key with nodemon inside)

Explain what nodemon does - restarts our server whenever changes are made

npm install express 
Express is a framework we use to get a node.js server up and running really quickly. 
Express is to node as react is to vanilla js


Explain difference between opening a file path vs. running a server
a file path that is sent to the browser to run shows up as it was saved. If you change and save the file, the changes dont register in the browser. 
  Server has hot reloading- meaning if you change and save the file, you dont need to refresh the page to recieve the changes
  
  More importantly:
    Explain how the internet works
    Our 'client', the machine we are using, goes to an address, like www.google.come. That address is actually  a request to a domain name server(DNS). Then they send a response back to the client with the ip address of the server. Then the client send the request to the server       client <=> server <=> db
      req and res (recall API interaction)

Create index.js file at root level of server
*/

const express = require('express');
const app = express();

app.listen(3000, () => console.log('App is listening on 3000'));

/*
Now create .env file and add PORT = 3000

npm install dotenv
dotenv is a package that allows us to parse through the .env file and add it to the file

Change index.js to following
*/  
require('dotenv').config();

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