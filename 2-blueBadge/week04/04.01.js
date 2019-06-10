

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
PIE CLIENT WALKTHROUGH 1 - CREATE-REACT-APP & JSX
**************************/

/*
npm install -g create-react-app

Folder Structure:
  javascriptMay2018
    javascriptLibrary
      0-prework
      1-jsFundamentals
      2-domFundamentals
      3-apiFundamentals
      4-reactFundamentals (new folder)
      
      cd into 4-reactFundamentals
      
      create-react-app pieclient
      
cd into my-react-app

Show folder structure:
  pieclient
    node_modules => explain how npm made this
    public
      favicon.ico => small icon on browser tab
      index.html => only html file in app
      manifest.json => for mobile
    src
      App.css => css for app.js
      App.js => root component
      App.test.js => for testing (DELETE, but not yet)
      index.css => styling for entire project
      index.js => middleman between index.html and App.js
      logo.svg => (DELETE, but not yet)
      ServiceWorker.js => for holding data off app for faster access (DELETE, but not yet)
    .gitignore => hides from git to prevent pushing to GitHub
    package-lock.json => more secure and detailed package.json
    package.json => lists dependencies in app
    README.md
  
  Explain flow of React
  
  browser (chrome) <= index.html (<div id="root"></div>) <= index.js (ReactDOM.render(<App />, document.getElementById('root'))) <= App.js (return (JSX)) <= other components
  
  FAST!!

  Run app => npm start

  Delete things and replace App.js with:
  return (
    <div className="app">
      <h1>PIES!</h1>
    </div>
  )

  Delete import of logo on top and registerServerWorker() in index.js

  Run again => just plain PIES! on white
  */


/*
  Assign gitbook on LMS
  
  clone repo and show how to add to folder:
  
  4-reactFundamentals
    (clone here)
    my-react-app
*/

/*
Gitbook parts 1-3
*/