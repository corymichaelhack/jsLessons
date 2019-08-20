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


/**************************
POSTGRES AND PGADMIN INSTALL

Postgres is the DB, pgadmin is the gui for our db, what we will use to visually represent our database  
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

But what is Node?? Node is a javaScript Library. Its an engine that allows us to run js in places we wouldnt otherwise be able to. JavaScript runs in the browser thanks to an engine. This engine compiles javaScript into C, which then gets compiled to an assembly language and then to machine language which is directly processed by microprocessors. Microprocessors need machine language to interact with our hardware and allot space in memory.There are several different tupes of engines that can compile JavaScript for us to run. 

Think of this as a car engine. All car engines need to convert gasoline to combustion, but how they do it depends on how efficient the engine is. 

Node (kind of car), uses a V8 engine(kind of engine) in order to compile your javaScript without the need of the browser! We can compile js directly onto our machine! yay! 

So what is npm? Its our node package manager! We can add packages of code to our javaScript engine, so when it gets compiled, it adds some code with it! These prebuilt packages are handy for doing some extra js for us, think of them as supertools


npm init => 
Will see this in package.json (add start and dev to scripts): 
{
  "name": "pieapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"

ANCHOR ADD NEW CODE HERE  

    "start": "node index.js",
    "dev": "nodemon"
  },
  "author": "",
  "license": "ISC"
}

Explain what start script does (npm start) and what dev does (nodemon)
npm start is what script or file will be run first when this command is entered. 
dev indidates running the server in dev mode, and with what tool. Nodemon allows us to make changes to our server without having to restart the server everytime

ANCHOR Go ahead and npm install --save-dev nodemon  (will create a devDependencies key with nodemon inside)

Explain what nodemon does - restarts our server whenever changes are made

ANCHOR npm install express 

Express is a framework we use to get a node.js server up and running really quickly. 
Express is to node as react is to vanilla js
Without express, we would have to call on a package called http, and write out creating a server, and using string interpolation create our routes and controllers



Explain difference between opening a file path vs. running a server
a file path that is sent to the browser to run shows up as it was saved. If you change and save the file, the changes dont register in the browser.

  Node Servers have what we call an event loop. That means that its constantly listening on one of the ports, or 'processes' on our machine. If there is a request on this port, we can see that request and either deal with it then, or create a callback and take care of it later. 
  
  More importantly:
    Explain how the internet works
    Our 'client', the machine we are using, goes to an address, like www.google.come. That address is actually  a request to a domain name server(DNS). Then they send a response back to the client with the ip address of the server. Then the client send the request to the server       client <=> server <=> db
      req and res (recall API interaction) the request is what we are asking for, and the response is what we get back from the server

Create index.js file at root level of server
*/

const express = require('express'); // were bringing all the code from the express package into our application. special code that has all our vanilla code to create a server. 
const app = express();  // were making a new instance of an express application

app.listen(3000, () => console.log('App is listening on 3000'));

/*


Now create .env file and add PORT = 3000

npm install dotenv
dotenv is a package that allows us to parse through the .env file and add it to the file
.env is an environmental file, a file that only lives in our local development. environmental files in general are important because they allow us to create an encapsulated environment in which to run our code. So if and when were ready to ship this out to somewhere else to run, our environmental variables can help us make those changes

Change index.js to following
*/  
require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`)) // BACK TICS!

//This helps us to obscure secure data, as well as make changes to our port when we deploy this later on
//Were calling the package dotenv to allow the data inside of this .env file to be configured as part of the global node process, in other words its like were making the contents of that file globally available variables

/*
Create .gitignore file and add following:
  node_modules/
  *.env

Build out own server - What is a server? A server is a program that manages network resources. In other words, its responsible for handling reqeuest and responses directed towards a database

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

What did we just do here? First, we create a public folder that holds our html, just a naming convention
Then we called on our version of express and called a function called use. use helps us set up specific middleware functions at certain paths. Middleware is a function that has access to the request object and the response object. (The cashier in the burger place) 
Inside app.use, were using a callback, were using a built in function called static that allows us to serve up static html files. We are giving it the parameter of the directory name(your path to this file) and the public folder. Thats the path to the file we want served. So when we go to localhost:3000, were seeing the html file we wanted to serve!

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
//router is a modular route handler. Basically it allows me to create routes, add middleware functionality, and set it up on a path. We could write one app (limited functionality) with just one router

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


/* Node server gitbook Chs. 0-4 */  