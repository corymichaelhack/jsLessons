/**************************
CODE CHALLENGE 2 - ARRAYS
**************************/

// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution

/*

Given 2 arrays:

const arrOne = [ 10, 20 , 30 , 40 , 50, 70 ];
const arrTwo = [ 5, 3, 2, 5 ];

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them.

If the first array has more values than the second, return an array with the same number of values as the shorter array

*/

const arrOne = [ 10, 20 , 30 , 40 , 50, 70 ];
const arrTwo = [ 5, 3, 2, 5 ];

const empty = [];

const arrMultiplier = (arrOne, arrTwo) => {
    if(arrOne.length < 1 && arrTwo.length < 1) return 'Arrays need values';

    if(!arrOne instanceof Array && !arrTwo instanceof Array) return 'Arguments must be arrays.';

    const limit = arrOne.length > arrTwo.length ? arrTwo.length : arrOne.length;
    console.log(limit)
    let newArr = [];

    for(i = 0; i < limit; i++) {
        newArr.push(arrOne[i] * arrTwo[i]);
    }

    return newArr;
}

console.log(arrMultiplier(empty, empty)); // fails
console.log(arrMultiplier(arrOne, arrTwo)); // passes

/*

* Typechecking with Typeof and Instanceof

* Typechecking is important because unexpected data types can break methods or further down the line, applications.

* Instanceof
  instanceof checks what kind of instance a certain value is. You can think of an instance as an occurrence of a type. So there are arrays in JavaScript, and they are a data type. Behind the scenes, all arrays in JavaScript are all instances of a master Array class. Which gives them access to different array methods, and also allows us to use instanceof of check to make sure a value is an array.

* Typeof
  Typeof checks the literal data type of a value, not the instance, and returns that type as a string. So an array will return 'object'. 

  */
 
// * Modify the challenge answer

// const arrMultiplier = (arrOne, arrTwo) => {
//   if(arrOne.length < 1 && arrTwo.length < 1) return 'Arrays need values';

//   // * Add Here
//   if(typeof arrOne != 'object' && typeof arrTwo != 'object') return "Arguments must be of type 'object'"

//   if(!arrOne instanceof Array && !arrTwo instanceof Array) return 'Arguments must be arrays.';
  
//   const limit = arrOne.length > arrTwo.length ? arrTwo.length : arrOne.length;

//   console.log(limit)
//   let newArr = [];

//   for(i = 0; i < limit; i++) {
//       newArr.push(arrOne[i] * arrTwo[i]);
//   }

//   return newArr;
// }

/*
    Are both necessary?  No, but it is better safe than sorry to include them.  

    So by including both typeof and instanceof, we are checking the type to make sure it is nothing other than an array in multiple ways.  Again, is this necessary?  No, but helpful.
 */

// * React Concept Talk Two ( JSX & Create React App )

// * Pie Client Walkthrough Part One