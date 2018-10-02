/**************************
WHITEBOARD 3 - WHITE BOARDING ASSESSMENT
**************************/

/*
Challenge 1:
Write a function that accepts two names as parameters and then prints the full name to the console.

Example: greeting('Robin', 'Holler')
*/

/*
Challenge 2:
Write a program that prints all the numbers from 1 to 100.
For multiples of 3, instead of the number, print 'Fizz'.
For multiples of 5, instead of the number, print 'Buzz'.
For multiples of 3 AND 5, instead of the number, print 'Fizz Buzz'.
*/

/*
Challenge 3:
Write a function called isRightTriangle that accepts three parameters called: side, base, and hypotenuse.
The function should return true if it forms a right triangle; it should return false if it doesn't.
(HINT: pythagorean theorem: a**2 + b**2 = c**2).

Example: 
isRightTriangle(3,4,5) == true
isRightTriangle(5,6,7) == false
*/

/*
Challenge 4:
Create an object literal called netflix.
It will have three properties: id, name, and seasonInfo.
Id will be an integer and name will be a string.
SeasonInfo will be an object which will have a property called episodeInfo, which is an array of more objects.
Those objects have an episode number property and an episodeName property.

You are welcome to fabricate the data.
*/

/**************************
WHITEBOARD 3 - POSSIBLE ANSWERS
**************************/

/*
Challenge 1:
Write a function that accepts two names as parameters and then prints the full name to the console.

Example: greeting('Robin', 'Holler')
*/

function greeting(fName, lName) {
  console.log(fName, lName);
}

greeting('Robin', 'Holler');

/*
Challenge 2:
Write a program that prints all the numbers from 1 to 100.
For multiples of 3, instead of the number, print 'Fizz'.
For multiples of 5, instead of the number, print 'Buzz'.
For multiples of 3 AND 5, instead of the number, print 'Fizz Buzz'.
*/

for (i = 1; 1 <= 100; i++) {
  if (i % 15 === 0) {
    console.log('Fizz Buzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}

/*
Challenge 3:
Write a function called isRightTriangle that accepts three parameters called: side, base, and hypotenuse.
The function should return true if it forms a right triangle; it should return false if it doesn't.
(HINT: pythagorean theorem: a**2 + b**2 = c**2).

Example: 
isRightTriangle(3,4,5) == true
isRightTriangle(5,6,7) == false
*/

function isRightTriangle(side, base, hyp) {
  console.log( Math.pow(hyp, 2) == Math.pow(side, 2) + Math.pow(base, 2));
}

isRightTriangle(3,4,5);
/*
Challenge 4:
Create an object literal called netflix.
It will have three properties: id, name, and seasonInfo.
Id will be an integer and name will be a string.
SeasonInfo will be an object which whill have a property called episodeInfo, which is an array of more objects.
Those objects have an episode number property and an episodeName property.

You are welcome to fabricate the data.
*/

let netflix = {
  id: 555,
  name: 'one upon a time',
  seasonInfo: {
    episodeInfo: [
      {
        episode: 1,
        name: 'pilot'
      },
      {
        episode: 2,
        name: 'whatever'
      }
    ]
  }
}


/**************************
API RECAP
**************************/

/**************************
ASYNC PROGRAMMING
**************************/
/*
Where JS is single string (line by line), asynchronous programming allows for simultaneous execution
*/
// Promises
/*
Though a promise can happen simultaneously with other functions (async), within the promise, you can set synchronous execution, allowing JS to wait for data to come back before the next stage of execution occurs

It is similar to ordering concert tickets.  I am promised that I can go to the concert, but I don't have to sit and do nothing until the concert.  However, I can't go to the concert unless I have the tickets.  So I first need the tickets before I can get in.
*/

// Callbacks
/*
Functions executed by other functions.

You can have nested functions or call a separate function within another.
*/

function one(x) {
  return x
}

function two(dataFromOne) {
  return `I have ${dataFromOne} chickens.`
}

console.log(two(one(10)));

/**************************
REST
**************************/
// Representational State Transfer
/*
Rules of REST:
  Client and server are separate
  Stateless => what is stateless? => doesn't store information between fetch requests
  Cacheable
  Layered
  Specified identification for each resource
*/