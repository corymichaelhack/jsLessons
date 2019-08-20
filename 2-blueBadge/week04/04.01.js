/* 
* 9:00 AM -- Welcome and Set Pace

Welcome students to blue badge--
Blue Badge is broken up into 3 parts,

NOTE Week One -  well learn about Node.js(a javaScript library that allows us to write a server). 
In class, well be creating the backend of an in-class project. Out of class, you will be following along with the modules in Canvas to build out a work out log server

NOTE Week Two - well learn about React( a javaScript Library that makes creating frontend applications superfast and easy to build). In class, well be creating the frontend of an inclass project. Out of class, youll be following along with the modules in Canvas to build out a workout log front end. 

NOTE Week Three - We will be connecting the front and backend of the in class application, and youll still be working through the modules in Canvas. We will also begin planning your own personal app. This app will be a full CRUD Application, which we will talk more about later. 

Week 4 and 5 will be worktime for you to build out your applications 

There will be lectures, but there will also be more self learning during blue badge as well
The calendar in Canvas should reflect what they can expect 


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


/* Node server gitbook Chs. 0-4 */  