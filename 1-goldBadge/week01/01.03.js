/*
PROJECTS TUTORIAL
*/
//show students their folder structure 
//JavaScriptSept2018
//  javascriptLibrary
//  projects

/**************************
LOOPS

3-loops
  01-forLoops.js, 02-forInLoops.js, 03-forOfLoops.js
**************************/

/**************************
FOR LOOPS
**************************/
/*
Loops offer a quick and easy way to do something repeatedly

There are many different kinds of loops but they all do roughly the same thing:
  For statement
  Do while statement
  While statement
  Labeled statement
  Break statement
  Continue statement
  For in statement
  For of statement

NOTE: There is a danger of infinite loops => explain
*/

//For loop structure: a)  initialize an indexing variable
//b)  set up a stop condition c) change the indexing variable
//Counting to 10 from 0 and logging the numbers:
for (let i = 0; i <= 10; i++){
  console.log(i);
}

//Counting to -25 by -3, starting from 2, logging the numbers
for (let i = 2; i >= -25; i = i - 3){
  console.log(i);
}

// Displaying letters in a name individually:
//(notice the variable stop condition)
var name = "Kinkade";

for (var i = 0; i < name.length; i++) {
	console.log(name[i]);
}

//you can use variables in all 3 of these components:
var start = 2;
var stop = Math.floor(Math.random()*30);
var increment = 3;

for (let i = start; i <= stop; i = i + increment){
  console.log(i);
}

/**************************
FOR IN LOOPS
**************************/
/*
Great for iterating over values in an object
*/

var student = { name:"Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item in student) {
  console.log(item); // name awesome degree week
  console.log(student[item]); // Peter true JavaScript 1
}

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat in catArray){
  console.log(cat);
}

/*
Let's write a for-in loop that capitalizes the first letter of a name
*/

var studentName = 'pAul';
var capName;
for (var n in studentName) {
  if (n == 0) {
    capName = studentName[n].toUpperCase();
  } else {
    capName += studentName[n].toLowerCase();
  }
}
console.log(capName); // Paul

/**************************
FOR OF LOOPS
**************************/
/*
EXPLAIN difference between for in and for of loops
*/

//the below doesn't work--object properties are not 'iterable'
var student = { name:"Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item of student) {
  console.log(item);
}

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
  console.log(cat, 'says meow'); // tabby, brittish shorthair, burmese, maine coon, rag doll ...says meow
}

/**************************
FUNCTIONS

4-functions
  01-declarations.js, 02-expressions.js, 03-callingFunctions.js
**************************/

//General Ideas:  at their broadest level, functions do the following:
//1)  they take some input which the function will handle/process
//2)  they process the input given to them
//3)  they usually return some value
//4)  they can be invoked (used) as many times as we want, cutting down on code repetition

//example one:
function newFunc(num){
  return num + 1;
}

newFunc(7);
console.log(newFunc(7));

//notice in the above that a function is declared with the 'function' reserved word
//the input (parameter) to the function is a variable--num
//num exists within the function, not outside the function
//our function returns something--this is what gets handled in the context of our function call

//example two:
function anotherFunc(firstName, lastName){
  return `My first name is ${firstName} and my last name is ${lastName}.`;
}

let sentence = anotherFunc('Tyler', 'Shelton');
console.log(sentence);
let secondSentence = anotherFunc('Alecx', 'Moritz');
console.log(secondSentence);
//again, our function is declared with the function reserved word
//this function takes two inputs (parameters): 'firstName' and 'lastName'
//our function handles/processes the inputs
//the function returns the processed input as output using the return keyword

//let's build a function that takes a complex type--an array in this case, and console.logs each 
//item in the input array
let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr){
  for (let element of inputArr){
    console.log(element);
  }
}
iteratorFunc(arr);
iteratorFunc(arr2);

/**************************
ARROW FUNCTIONS

4-functions
  09-arrowFunctions.js
**************************/

// Normal
function coffee() {
  console.log('coffee is good');
}

// Fat Arrow
let coffee = () => { 
  console.log('something') 
}

coffee();//notice that arrow functions are anonymous

var cats = (kitten, puppy) => {console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)} //does this function get hoisted?  demonstrate that it doesn't

cats(1, 12);

// Concise vs. Block Bodies
// Concise Body
let apples = x => `There are ${x} apples.`;
console.log(apples(10));

// Return (if one-line arrow function) is implied

// Block Body
let bananas = (x) => { 
  return `There are ${x} bananas.`; 
}
console.log(bananas(5));

// Return must be explicitly written in a block-body arrow function

// Line Breaks are Bad
/*
Fat arrow functions are one of the few elements of JS that DO take white space into account.  
Where a standard function does not need to be kept at a specific format, fat arrow functions 
DO need to stay on one line; no line breaks!
*/

let func = () => 'hi'; // ok

let secondFunc = () 
=> 
'hi';

console.log(func());
console.log(secondFunc());
/*
let func = ()
  => console.log('hi'); // not ok
*/

/**************************
Git Stuff for 1-jsFundamentals
**************************/

/**************************
RECAP
**************************/

/*
Fizz Buzz
Loops
Functions Basics
Parameters
Fat Arrow Functions
Return
Git Recap
*/