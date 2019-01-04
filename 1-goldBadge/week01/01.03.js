/**************************
RECAP
**************************/
let stringExample = 'string';
let numberExample = 0;
let boolExample = true;
let conditionExample = 0;


if (typeof conditionExample === 'string') {
  console.log('Yep, A is A.')
} else if (typeof conditionExample === 'number') {
  console.log('Numbers are cool.')
} else if (typeof conditionExample === 'boolean') {
  console.log('Truthiness')
}

//Switch solution
switch (typeof conditionExample) {
  case 'string':
    console.log("It's a string, Jim");
    break;
  case 'number':
    console.log("Like, really. Numbers are the coolest.");
    break;
  default:
    console.log("and justiceness");
    break;
}

//Ternary solution
var day3 = (typeof conditionExample == 'string') ? "Good thing he was just a red shirt." : (typeof conditionExample == 'number') ? "I SAID NUMBERS ARE COOL!" : (typeof conditionExample == 'boolean') ? "is the bestest way." : "Error"

console.log(day3)



/**************************
WHITEBOARD 1 - FIZZ BUZZ (Conditionals Only)
**************************/
/*
Challenge:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/


var FB = 15;

if (FB % 3 === 0 && FB % 5 === 0) {
  console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
  console.log('Buzz');
} else if (FB % 3 === 0) {
  console.log('Fizz');
}




var FB = 30;




switch (true) {
  case (FB % 3 === 0 && FB % 5 === 0):
  console.log('Fizz Buzz');
  break;
  case (FB % 5 === 0):
  console.log('Buzz');
  break;
  case (FB % 3 === 0):
  console.log('Fizz');
  break;  
}

var FB = 30;

(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz') : FB;


/*
Overview for Today
******************
Fizz Buzz
Loops
Functions Basics
Parameters
Fat Arrow Functions
Return
Git Recap
*/


/**************************
LOOPS

3-loops
  01-forLoops.js, 02-forInLoops.js, 03-forOfLoops.js
**************************/
//ADAM
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

for (var i = 0; i < 10; i++) {
	console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

//Challenge: using a for loop, count to 20, by 2's
for (let i = 0; i <= 20; i += 2) {
  console.log(i); // 0 2 4 6 8 10 12 14 16 18 20
}

//Challenge: using a for loop, count from 10 to 0, going down by 1's
for (i = 10; i >= 0; i--) {
  console.log(i); // 10 9 8 7 6 5 4 3 2 1 0
}

//Challenge: using a for loop, count from 0, going down by 2's to -24
for (i = 0; i >= -25; i -= 2) {
  console.log(i); // 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24
}

// Challenge: using a for loop, go through a name and display each letter individually
var name = "Kenn";

for (var i = 0; i < name.length; i++) {
	console.log(name[i]); // K e n n
}

/*
Challenge: 
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/
var sum = 0;

for (var i = 1; i <= 50; i++) {
   sum += i;
}

console.log(sum) //1275

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
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
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
  console.log(item); // name awesome degree week
}

var catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
  console.log(cat, 'says meow'); // tabby, brittish shorthair, burmese, maine coon, rag doll ...says meow
}

/**************************
FUNCTIONS

From MDN Functions are a set of statements that perform a task or calculates a value. 



4-functions
  01-declarations.js, 02-expressions.js, 03-callingFunctions.js
**************************/

/**************************
DECLARATIONS
**************************/

function hi() {
  console.log('HI')
}

/**************************
EXPRESSIONS
**************************/

var hi = function hi() {
  console.log('HI')
}

/*
Difference between declaration and expression:
Declaration gets hoisted
Expression does not
*/
 
/**************************
CALLING FUNCTIONS
**************************/

function hi() {
  console.log('HI');
  return "Hi";
}

hi // nothing
hi() // HI
console.log(hi); // [function = hi]
console.log(hi()); // HI    undefined

/*
Why is the second value undefined when we console.log hi() but not when we console.log hi? 
What are the parentheses doing?

The parenths after a function IMMEDIATELY INVOKE said function.

*/

/*
Challenge:
Create a function that, when invoked, lists out the numbers 1-10
*/

function counting() {
  for (i = 1; i < 11; i++){
    console.log(i)
  }
}

counting();

/*
Challenge:
Given the array, create a function that lists out the values individually. 
*/

let arr = ['This', 'is', 'really', 'cool'];

function arrList() {
  // for (item in arr) {
  //   console.log(arr[item])
  // }
  for (item in arr) {
    console.log(arr[item])
  }
}

arrList();

/**************************
PARAMETERS

4-functions
  05-parameters.js
**************************/

/*
Parameters are like empty storage boxes that we can name whatever we want. 
It only matters what the name is when you are calling the paramter within the function => they have to match

You can have multiple parameters for a single function

You give the value that you want to put in that storage box (parameter) when you call the function
*/

function pet(animal) {
  console.log(`I have a ${animal} for a pet.`);
} 

pet('cat');

/*
Challenge:
Write a function that takes two parameters:
One parameter is for a first name,
The other paramter is for a last name;
Have them come together in a variable inside the function.
console.log 'Hello, my name is Tom McClellan'
Call your function 
*/

function myName(fName, lName) {
  let fullName = fName + ' ' + lName; 
  console.log(`Hello my name is ${fullName}.`);
}

myName('Ray', 'Hancock');

/**************************
FAT ARROW FUNCTIONS

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

coffee();

var cats = (kitten, puppy) => {console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)} //does this function get hoisted?  demonstrate that it doesn't

cats(1, 12);

// Concise vs. Block Bodies
// Concise Body
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

// Return (if one-line fat arrow function) is implied

// Block Body
let apples = (x) => { console.log(`There are ${x} apples.`); }
apples(10);

// Return (if you use one) must be explicitly written


// Line Breaks are Bad
/*
Fat arrow functions are one of the few elements of JS that DO take white space into account.  Where a standard function does not need to be kept at a specific format, fat arrow functions DO need to stay on one line; no line breaks!
*/

let func = () => console.log('hi'); // ok

/*
let func = ()
  => console.log('hi'); // not ok
*/


/**************************
RETURN
**************************/
/*
Functions are like the engines of JS where they will perform a specific function and produce a desired effect.  With the return keyword, we are pulling away from using console.log to show the output of a function in the terminal, and spitting out a value that we can then grab and place in another part of your code => we can effect change on your actual website with the return keyword, where console.log would only work in the dev tools (for example).

It is like Chicken Run where the people create a huge machine that takes in chickens (like a parameter) and spits out chicken pot pies.  The return keyword is the chicken pot pie.  The function is doing all of the cutting, pie making, gravy filling, etc. and the return is simply giving the pie.  We can then take the pie and put it in something else...
*/

function captializeName(name) {
  let capName = '';
  for (let l in name){
    if (l == 0){
      capName += name[l].toUpperCase();
    } else {
      capName += name[l].toLowerCase();
    }
  }
   console.log(capName) // Tom
   return capName
}

// console.log(capName) // Error, not defined

const myName = captializeName('tom')

console.log(myName + ' how are you doing?') // Tom how are you doing?

/*
Challenge:
Make a tip calculator using a function
Have it RETURN the value 
Capture that returned value in a VARIABLE
Print that variable
*/

function tipCalc(bill) {
  let tip = (bill * 0.2);
  return tip.toFixed(2);
}

let totalTip = tipCalc(19.88);
console.log(totalTip);

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