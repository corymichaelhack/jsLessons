// (HTML FIRST)

/*
Folder Structure:
  javascriptMay2018
    javascriptLibrary
      0-prework
      1-jsFundamentals (new folder - **use terminal to cd, ls/dir, and mkdir**)
        1-grammarAndTypes (new folder)
*/

/**************************
COMMENTS

1-grammarAndTypes
  01-comments-and-console.js
**************************/

//what comments do for us:
//communicate to anyone reading our code

//types of comments:
//1)  single-line comments

/*
2)  multi-line comments
*/

//console.log
//what a console.log does for us--outputs some message to the console
console.log('this is a console.log message!');

console.log('you can separate parts of a console message with commas', ', just like this');

//console.log and debugging
//console.log messages allow us to debug in 2 big ways:
//1) we can check the status of some javascript 'thing'
//2) we can check a process we have built with repeated console.log messages

//example 1:
var sampleName = 'Tyler';
console.log(sampleName);

//example 2:
var sampleNum = 1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);

/**************************
VARIABLES

1-grammarAndTypes
  02-declarations.js
**************************/
// What is a variable?
var a = 1; 
var b = 2; 
console.log(a + b); // 3

//notes on variables:
//1)  a variable must begin with a letter, underscore, or dollar sign
//2)  numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables

/**************************
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
**************************/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value.  This can be after the initialization.
*/

var x;
console.log('Declaration 1:', x); // Declaration: undefined

x = 10;
console.log('Initialization 1:', x); // Initialization 1: 10

x = 33;
console.log('Assignment 1:', x); // Assignment 1: 33

var y;
console.log('Declaration 2:', y);

y = 'hello';
console.log('Initialization 2:', y);

y = 'you are my fren';
console.log('Assignment 2:', y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
Const = also 'new'; declares unchangeable variables
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty); // great! Wonderful!

tonight = 'lovely!'
console.log(tonight, elevenFifty); // lovely! Wonderful!

// elevenFifty = 'Super'
console.log(tonight, elevenFifty); // ERROR

/**************************
TYPES

1-grammarAndTypes
  05-types.js
**************************/

// Booleans
// What is a boolean?
var on = true;
console.log(on); // true

let off = false;
console.log(off); // false

//boolean can represent: true/false, yes/no, on/off

// Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass); // undefined

var undef = undefined;
console.log(undef); // undefined

// Null
/* 
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty); // null

/*
Null and undefined both represent variables with no value inside.  Think of it this way--null values
are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).  Undefined
values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!).
*/

// Numbers
var myLiteralAge = 90;
console.log(myLiteralAge);

var precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

var rounded = 9999999999999999; // (One more 9)
console.log(rounded); // 10000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

// Strings
// Strings = any value within quotes; JS spits out value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo); // double quotes single quotes

// Concatenation vs. Addition
let first = 1050 + 100; 
let second = '1050' + '100';

console.log(first); // 1150
console.log(second); // 1050100

console.log(typeof first); // number
console.log(typeof second); // string

// JS evaluates with the + operator according to the values on either side of the + sign

let third = 1050 + '100';

console.log(third); // 1050100
console.log(typeof third); // string

// Interpolation
//interpolation lets you use strings with dynamic content (they require backticks)

//example 1:
let age = 32;
let string = `my age is: ${age}`
console.log(string);

// Objects
/*
What is an object?

An object is a container that stores property names and their values 
(it can hold multiple data types)

Denoted by {}
Has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a comma
*/
let hulk = {
  color: 'green',
  age: 42,
  isStrong: true
}

console.log(hulk);
console.log(hulk.age);
console.log(typeof hulk);

// Arrays
/*
Arrays store multiple values in an ordered way.  They too hold multiple data types

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

var burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]
console.log(burritos[0]);
console.log(typeof burritos); // OBJECT

/*
WHAT?? Why is typeof coming back with an object, and not array??
*/