/*
/*******************
DAY ONE REACT CHALLENGE
*******************/

/*
BRONZE LEVEL:
Inside the DayOne component, initialize three state values ( using useState() ), platform, generation, and maker, as well as the methods to update them. Give them a default value of 'Playstation', 3, and 'Sony' respectively. 

Add a button to the return of this component. When this button is clicked, it should fire off a function to print all three values to the console.


SILVER LEVEL:

Add onto the Bronze Level challenge.

Do all of the above, but make a new functional component called
'PropDisplay' (careful with folder structure!).  Call this component
three times inside the 'DayOne' return.  Each 'PropDisplay'
component call should be passed a prop, the first is passed 'console',
the second 'version', and the third 'maker'.  Each PropDisplay should 
display the prop it gets passed.  Good luck!

GOLD LEVEL:

Reset the initial values of the calls to useState() with empty strings, so platform, generation, and maker are all empty when the component is created.

Add three inputs, use data binding to allow the values of platform, generation, and maker to change when a user types into those inputs.

* Bronze

const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');

    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };

    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <Button onClick={ logState }>Log State</Button>
        </Container>
    )
}

* Silver

const PropDisplay = (props) => {
    return (
        <h4>{ props.string }</h4>
    )
}

const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');

    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };

    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <PropDisplay string={ platform } />
            <PropDisplay string={ generation } />
            <PropDisplay string={ maker } />
            <Button onClick={ logState }>Log State</Button>
        </Container>
    )
}

* Gold

const DayOne = () => {
    const [ platform, setPlatform  ] = useState('Playstation');
    const [ generation, setGeneration ] = useState(3);
    const [ maker, setMaker ] = useState('Sony');

    const logState = () => {
        console.log(`Platform : ${platform} - Generation : ${ generation } - Maker : ${ maker }`);
    };

    return (
        <Container>
            <h1>Day One Challenge</h1>
            <Badge color="primary">Props</Badge>
            <Badge color="secondary">useState()</Badge>
            <hr />
            <Button onClick={ logState }>Log State</Button>
            <PropDisplay string={ platform } />
            <PropDisplay string={ generation } />
            <PropDisplay string={ maker } />
            <hr />
            <Label>Platform</Label>
            <Input value={ platform } onChange={(e) => setPlatform(e.target.value)} />
            <Label>Generation</Label>
            <Input value={ generation } onChange={(e) => setGeneration(e.target.value)} />
            <Label>Maker</Label>
            <Input value={ maker } onChange={(e) => setMaker(e.target.value)} />
        </Container>
    )
}

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