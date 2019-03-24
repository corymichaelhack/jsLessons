/* 
* 9:00 AM -- Welcome and Set Pace

Welcome students to blue badge--talk about the goals of the badge, the project,
and what their learning experience will look like

Slack them the blue badge calendar:
*/
/**************************
CODE CHALLENGE 1 - OBJECTS
**************************/
// * Give Students about 30/40 minutes to work -  then go over solutions - Get students to Slack their own solutions after giving instructor solution

/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2

Example Object : 

const person = {
  fName: 'Tom',
  lName: 'McClellan'
}

*/

const testObj = {
  language : 'JavaScript',
  library : 'React'
};

const propSwap = (obj, propOne, propTwo) => {
  let newObj = Object.assign({});

  newObj[propOne] = obj[propTwo];
  newObj[propTwo] = obj[propOne];
  
  return newObj;
};

let obj = propSwap(testObj, 'language', 'library');
console.log(obj);
console.log(testObj);

// * React Concept Talk One ( Intro to React )

// * Assign GitBook 
// https://eleven-fifty-academy.gitbook.io/javascript-301-reactfundamentals/

/*
  Slack out to instructor code - pin to channel
  
  clone repo and show how to add to folder:
  
  4-reactFundamentals
*   (clone here)
    my-react-app
*/

// * GitBook parts 1-3, or continuing to move forward in the GitBook if past Ch 3