// * JavaScript Challenge

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

// ***************************************************************************

/**************************
POSTGRES AND PGADMIN INSTALL
**************************/

// PostgreSQL - https://www.postgresql.org/download/
// PGAdmin - https://www.pgadmin.org/download/

/**************************
 PIE API WALKTHROUGH 1 - NPM, EXPRESS, POSTMAN
 **************************/
/*
  Folder Structure:
    JSMonth2019
      javascriptLibrary
        0-prework
        1-jsFundamentals
        2-domFundamentals
        3-apiFundamentals
        4-nodeFundamentals
        5-reactFundamentals 
      projects
        gold
        blue (new folder)
          pieProject (new folder)
            server 
        
          cd into server
          npm init => explain what package.json is doing 

- npm can manage packages that are local dependencies of a particular project, as as globally-install JavaScript tools. When used as a dependedncy manager for a local project, npm can install, in one commane, all the dependencies of a project through the package.json file.

- The package.json is a file that houses information on our project. It lists the packages our project depends on (dependencies), specifies versions of a package our project is using, and makes our build reproducible - making it easier to share with other developers.

Let's take a moment to see what we recognize in this JSON.

Will see this in package.json (add start and dev to scripts): 
{
  "name": "pieapi",
  "version": "1.0.0",
  "description": "pie server",
  "main": "index.js", <------- CHANGE FROM INDEX.JS TO APP.JS
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    ! NEW CODE BELOW
    "start": "node index.js",
    "dev": "nodemon"
  },
  "author": "",
  "license": "ISC"
}
- Explain both the start and dev scripts:
  - npm start is the command we use to start a package from our project. When you run the npm start command from the root directory of your project, node will look for a 'scripts' object in the package.json file. If it finds one, it will look for a script with the key start and run the command that is specified as its value. By default, if the package.json file does not have a scripts object or if the scripts object doesn't have a start key, it will automatically run the command 'node server.js'.

  - dev indicates that we're running the project in development mode, and that we're using 'nodemon' to do that. Nodemon simply allows us to make changes to our server without having to restart our server every time that we make a change.

************
NPM INSTALLATIONS
************

! nodemon: npm install --save-dev nodemon

  - Again, Nodemon allows us to make changes to our server without having to restart it every time we make a change.
    * Notice that after we ran our installation of nodemon that we now have a package-lock.json file and a node_modules folder. Our package.json file has also been changed.

  - node_modules are packages that npm installs that allow our application and all of its dependencies to run properly. When we installed nodemon, we also got all of the packages that IT requires to run properly.

  - package-lock.json simply locks in the version of the package(s) that we're using. We get this file so that if anyone clones our project and tries to run it, their packages have the exact same versions that ours do - it's basically a version control system that acts as a failsafe.

express: npm install express
  - express is a lightweight web application framework used to help organize our application into a MVC(model view controller) architecture on the server side. Express.js is *not* a model view controller framework by itself - we have to use our own object-relational mapping library such as Sequelize (which we'll use) for a SQL database.

  - The SQL database we'll use will provide a backend to our application and will help us manage everything from routes to handling requests.

************
OPENING A FILE VS RUNNING A SERVER
************

  - A file path that is sent to the browser to run shows up as it was saved. If you change and save the file, the changes don't register in the browser until we actually refresh the browser. ---> Think 'open in default browser' - we don't see any changes until we save our changes and refresh the browser.
  - When we run our server using nodemon or npm start, it uses something called hot reloading. Hot reloading displays code changes without restarting the app and effects only changed code.
*/

//---------------------------------------------------------------------------------------------------------------------------------------

/*
************
   APP.JS        - CREATE app.js file at root level of our server directory.
************

- what is a module? A module is a JavaScript library, framework, or file that you can import into other code using Node's require() function. Express itself is a module, as are the middleware and database libraries that we'll end up using in our Express application.
*/

const express = require('express'); // here we are invoking Node's require() function, and specifying the name of the module we want to import. This would not work if we had not installed express as a dependency.
const app = express(); // our app variable is actually what is creating our express application - we're grabbing our express module from line 1 and invoking it to create an express application. This unlocks the use of HTTP requests, middleware functionality, and some other basic application settings that control how the application itself behaves.

app.listen(3000, () => console.log('app is listening on 3000')); // This is starting up our server on port 3000, and simply running a console.log statement so we know that the server is actually running.


/*
 ************
    .ENV        - CREATE .env file at root level of our server directory.
 ************

- a .env file is an environment file, a file that we can use to set up environment variables. We do this to simplify the code we write.
- if we referenced our port in 10 different files in our server, and then changed what port we wanted to run our application on, we would then have to change that port in 10 different files instead of just one. It also adds an extra level of security to our application because we can hide this folder.

- when the server is started or ran, Node automatically loads any environment variables into what's called 'process.env' to make them available to the application.

- to use .env within our project, we need to install it:
            .env: npm install dotenv
*/

// add the following to .env
PORT = 3000

// add the following to app.js
require('dotenv').config();

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));


/*
***************************
 GIT IGNORE     - CREATE .gitignore file at root level of our server directory
***************************

add the following to .gitignore:
    node_modules/
    *.env
*/


/*
*********************
SERVING STATIC FILES	- CREATE public folder at root level of server directory, create index.html inside of public folder
*********************

server
  public
    index.html

- in the index.html file, add :
<h1>This is working with a web server!</h1>

- static content is any content that can be delivered to an end user without having to be generated, modified, or processed. The server delivers the same file to each user, making static content one of the simplest and most efficient content types to transmit over the Internet.
- Any kind of file can be served as static content as long as it does not change in response to a user’s actions or inputs. This includes images, JavaScript files, CSS files, videos, Flash files, even web pages.
- Although most of todays websites are dynamic, user driven applications, we can still serve users static files or webpages if we want to. We'll be using React to create a dynamic client facing interface that we'll connect with our backend.
*/

// add the following code to app.js

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (req, res) => res.render('index'));

/*
- make sure the server is running
    - open postman and make a get request to 'http://localhost:3000/'
    - also show that we can view this in our browser
*/
/*
******************************
  HOW DOES THE INTERNET WORK?
******************************
OPTIONAL
In a nutshell, the internet is simply 'Routers Moving Packets According To Various Protocols' -----> https://medium.com/@User3141592/how-does-the-internet-work-edc2e22e7eb8

---> https://frontendmasters.com/books/front-end-handbook/2018/images/how-the-internet-works.jpg

*/
/*
************
  PIE ROUTE
************

- in app.js, comment out the code for serving a static file

    - add the following code to app.js:
*/

app.get('/pies', (req, res) => res.send('I love pie!'));
// run the above code in postman
// show express docs on how routing works ---> https://expressjs.com/en/starter/basic-routing.html


/*
***********************
ADD CONTROLLERS FOLDER 	 - CREATE controllers folder at root level of server directory.
**********************

- in the controllers folder, add a piecontroller.js file

  server
    controllers
      piecontroller.js

      - add the following code to piecontroller.js
*/

const express = require('express');
const router = express.Router();
// use the express.Router class to create modular, mountable route handlers. We will import and mount this piecontroller file to our app.js file so we can access any routes within this file itself.

router.get('/', (req, res) => res.send('I love pie!'));
// we can simply just use a '/' for our route if we don't want to add any subrouting after hitting our pies endpoint.

module.exports = router;


// go back to app.js. Add and change the following:

// add
const pies = require('./controllers/piecontroller');

// change from
app.get('/pies', (req, res) => res.send('I love pie!'));
// change to
app.use('/pies', pies)

// app is using the endpoint '/pies' and then directing to our pies variable, which simply just routes us to our piecontroller. This also allows us to chain our base endpoint of pie to any subroutes we have in the piecontroller file.


/*
**********************
MODEL VIEW CONTROLLER
**********************

The MODEL in a todo app might define what what a “task” is and that a “list” is a collection of tasks.

The VIEW (think React) code will define what the todos and lists looks like, visually. The tasks could have large font, or be a certain color.

Finally, the CONTROLLER could define how a user adds a task, or marks another as complete. The Controller connects the View’s add button to the Model, so that when you click “add task,” the Model adds a new task.

*/

// Run in postman

/* Node Server Modules  */