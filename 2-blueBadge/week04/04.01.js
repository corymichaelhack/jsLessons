/*
Talk about "Think Like a Programmer", chapters 1-3, 8
  Always have a plan
  Restate the problem
  Divide the problem
  Start with what you know
  Reduce the problem
  Look for analogies
  Experiment
  Don't get frustrated
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
      App.js
      App.test.js => for testing (DELETE, but not yet)
      index.css
      index.js
      logo.svg (DELETE, but not yet)
      ServiceWorker.js => for holding data off app for faster access (DELETE, but not yet)
    .gitignore => hides from git to prevent pushing to GitHub
    package-lock.json
    package.json
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