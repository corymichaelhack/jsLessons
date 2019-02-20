/*(HTML FIRST)

Overview for Today
 HTML
 CSS
CSS Walthrough
Intro to CodePen
Intro to Smiley Gitbook
Give out CSS Creature Assignment
 
 Comments
 Variables
 Declarations
 Datatypes
*/

/*

Smiley GitBook
****************
  Lunch
****************
CSS Mini Lesson
************
By 3!
************
JS

*/ 

/*
Folder Structure:
  javascriptMay2018
    javascriptLibrary
      0-prework
      1-jsFundamentals (new folder - **use terminal to cd, ls/dir, and mkdir, do tree cmd to show tree**)
        1-grammarAndTypes (new folder)
*/

/**************************
COMMENTS

1-grammarAndTypes
  01-comments.js
**************************/

//what comments do for us:
//1) communicate with other developers by writing in plain English
//2) annotate certain sections of our code for our future selves
// Comments may feel unnecessary but the best way to understand code is to make a quick comment 


//console output of 'yay';
console.log('yay');

//i mean, it is!  we're learning to code!  :)
console.log('Day 1 is great!');

console.log('How to bake bread below (Multi-line)');
/*
Get Flour
Get Eggs
Mix Ingredients
Knead Dough
Let Dough Rise
Bake
Enjoy Bread
*/

/**************************
VARIABLES

1-grammarAndTypes
  02-declarations.js
**************************/
/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/
  let a = 2;

  let     b      =      1; 
/*(1)    (2)    (3)    (4)     

1- Keyword
2- Variable name 
3- Assignment Opperator
4- Variable value

*/
console.log(a + b); // 3


/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  No spaces are allowed in variable names
//5)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'Autumn'; 
*/

/*
Var, Let, and Const:

Var = 'old' keyword for variables ** We wont be using this as often. If you have prior coding expirience and used var in the past, thats okay, but we want to try to stay in let
Let = 'new' keyword for variables (introduced with ES6 *new version of JavaScript) For now best practice is to learn to use let 
Const = also 'new'; declares unchangeable variables
*/

/**************************
DECLARATIONS
**************************/

/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

let x;
console.log('Declaration:', x); // Declaration: undefined

x = 10;
console.log('Initialization 1:', x); // Initialization 1: 10

x = 33;
console.log('Initialization 2:', x); // Initialization 2: 33

let y = 'Hello';
console.log('Both:',x, y); // Both: 33 hello


/****************************** 
 * Const = also 'new'; declares variables meant to remain unchanged
 */

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty); // great! Wonderful!

today = 'Lovely!';
console.log(today, elevenFifty); // lovely! Wonderful!

// elevenFifty = 'Super'
console.log(today, elevenFifty); // ERROR

/**************************
TYPES

1-grammarAndTypes
  03-types.js
**************************/

/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 

let i = true;

let j = false;
/*        (1)
1-Keyword for boolean - no quotation marks

let on = true;
console.log(on); // true

let off = false;
console.log(off); // false
 

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty); // null

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined;// never do this
console.log(undef); // undefined

let grass;
console.log(grass); // undefined

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 



We've talked before about how every variable is basically a storage container in JavaScript
think of variables with null and undefined as packages coming out of UPS
Null packages are packages that were intentionally packed up with nothing, but have been assembled
Undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // (One more 9) JS gives you space for 15 9s before it rounds up to 10
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// js rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

// Quick Discussion : let a = Number('123'), turns strings into numbers. 



/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1050 + 100; 
let second = '1050' + '100';

console.log(first); // 1150
console.log(second); // 1050100

console.log(typeof first); // number
console.log(typeof second); // string


/*
Objects
*************

*/


let car1 = {
  color: 'red',
  tires: 4,
  extras: 'A/C and Radio',
  cool: true
};

console.log(car1); // { size: 'large', quantity: 4, now: true }
console.log(typeof car1); // object


/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

var burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos); // OBJECT

/*
WHAT?? Why is typeof coming back with an object, and not array??

What is the definition of objects again? A container that can hold multiple datatypes

Notice that arrays, too, are a container that can hold multiple datatypes.  Therefore, JS has classified arrays as objects and not a datatype of their own


*/

/*

Addition vs. Concatenation
**************************
When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
 when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
 -it smashes the values together without trying to synthesize the values
*/
  
let third = 1050 + '100';

console.log(third); // 1050100
console.log(typeof third); // string

/*
With the plus operator, if 1 string and 1 number are given to the plus sign, it returns a string
*/

/* 
Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.

console.log your whole address (with the space between variable).
*/

let firstName = 'Autumn';
let lastName = 'Henderson';
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';
let zipcode = 46038;

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // Autumn Henderson, 12175 Visionary Way, Fishers, IN 46038

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

let myName = "Autumn";
console.log(myName.length);

/*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*

*/
let myNameIs = "Autumn";
console.log(myNameIs.toUpperCase()); // method that changes a string to uppercase. 

let home = 'My home is indianapolis'; 
console.log(home.includes('indianapolis')); // method that checks if a certain string is included in another string

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts ';


/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

var burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos); // OBJECT

/*
WHAT?? Why is typeof coming back with an object, and not array??

What is the definition of objects again? A container that can hold multiple datatypes

Notice that arrays, too, are a container that can hold multiple datatypes.  Therefore, JS has classified arrays as objects and not a datatype of their own


*/

/**
 * Data Type Cheat Sheet 
 * *********************
 * Boolean
 * *******
 * Uses true or false, no quotes
 * let yes = true;
 * 
 * Null
 * ********
 * Has no value but exists
 * let isnt = null;
 * 
 * Undefined
 * **********
 * Does not exist yet
 * let wont = undefined; 
 * 
 * Numbers
 * *******
 * Uses numbers only, no quotes or letters
 * let nums = 15; 
 * 
 * String
 * *******
 * Can use double or single quotes
 * let name = 'Mine';
 * let hey = "Hi";
 * 
 * Object
 * *******
 * Uses curly braces, and key:value pairings
 * let obj = {
 * isObj: true, 
 * name: "Autumn", 
 * age:28
 * };
 * 
 * let arr = ['Arrays', 'are', 'also','objects']; 
 * 
 */



/**************************
 RECAP
 **************************/

/*
HTML
CSS
Comments
Variables
Declarations
Datatypes

*/
