/*********************
ICE BREAKER CHALLENGE
*********************/
// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution
//pair students to solve the below challenge.  random pairs will present their solutions

/* 
  Write a function that takes an object as input.  The function should return the total length of 
  all the characters in the keys of the object by alternately adding and subtracting the length of
  each key.  Don't mutate(change) the original object.
  
  For example:
    Given: {
      keya: 'Tyler',
      keybee: 'Alecx',
      keyceeeee: 'Dave'
    }
    Output from function: +4 (keya) -6 (keybee) +9 (keyceeeee) => 7
    
    or
    Given: {
      test: 'react',
      testingYourPatience: 'node',
      testing: 'angular'
    }
    Output from function: +4(test) -19(testingYourPatience) +7(testing) => -8
*/

let testObj = {
  test: 'react',
  testingYourPatience: 'node',
  testing: 'angular'
}

testFunc = (obj) => {
  let keyArr = Object.keys(obj);
  console.log(keyArr);
  return keyArr.reduce((agg, el, i) => {
    return i % 2 === 0 ? agg + el.length : agg - el.length;
  }, 0)
}

console.log(testFunc(testObj));

/* If you have managed to complete the above, see if you can refactor your code so that
the function takes an array of objects as input, and returns an array of the alternately added/subtracted
key lengths in an array.

Example input:
[
  {
    keya: '',
    keyb: '',
    keyc: '',
  },
  {
    keyOne: 'test',
    keyTwo: 'test',
    keyThree: 'test'
  },
  {
    keyheya: 'what',
    keyhello: 'what',
    keywhatevs: 'what'
  }
]

Example output: 
  [4 (from +4 -4 +4), 7 (from +6 -6 +7), 9 (from +7 -8 +10)]
*/

let arrOfObjs = [
  {
    name1: 'Tyler',
    name2: 'David',
    name3: 'Alecx'
  },
  {
    firstKey: '',
    secondKey: '',
    thirdKey: ''
  },
  {
    what: '',
    whatev: '',
    whatever: ''
  }
]

const arrReducer

// * React Component LifeCycle Demo