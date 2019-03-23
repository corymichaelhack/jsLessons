/* 
* 9:00 AM -- Welcome and Set Pace

Welcome students to blue badge--talk about the goals of the badge, the project,
and what their learning experience will look like

Slack them the blue badge calendar:
https://docs.google.com/document/d/1wVNLfg-n0DsS6sI-rgsIOOjTMO_D83OrnDXX0mAKs20/edit?usp=sharing
*/



let swapper = (obj, prop1, prop2) => {
  let temp = {};
  for (let enumerable in obj){
    // console.log(iterable)
    temp[enumerable] = obj[enumerable];
  }
  let placeholder = temp[prop2];
  temp[prop2] = temp[prop1];
  temp[prop1] = placeholder;

  return temp;
}

obj = {
  keya: '1',
  keyb: 2,
  keyc: false
}

console.log(swapper(obj, 'keya', 'keyb'));


/**************************
CODE CHALLENGE 1 - OBJECTS
**************************/
// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution

/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2

Example Object : 

const person = {
  fName: 'Tom',
  lName: 'McClellan'
}

*/

// * Option 1 (Not Quite Right)
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

// * Option 2 (Better)
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

const sampleObj = {
  firstName: 'Quinn',
  lastName: 'Crabtree'
}

const objKeySwap = (obj, prop1, prop2) => {
  const outputObj = {};

  for (let key in obj){
    outputObj[key] = obj[key];
  }

  outputObj[prop2] = obj[prop1];
  outputObj[prop1] = obj[prop2];

  return outputObj;
}

console.log(objKeySwap(sampleObj, 'firstName', 'lastName'));

// * Following Challenge React Concept Talk One ( Intro to React )

// * Pie Client Walkthrough After Lunch