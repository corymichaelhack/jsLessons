// (HTML FIRST)

//Overview for Today
// HTML
// CSS
/* ING
CSS Walthrough
Intro to CodePen
Intro to Smiley Gitbook
Give out CSS Creature Assignment
 */
// Comments
// Variables
// Declarations
// Datatypes


/*
ING Leads until lunch
Smiley GitBook
****************
  Lunch
****************
Switch to CSS Creature intro, Ing makes small example, shows some tools of css
    REMINDER: your CSS Creature is DUE BY TOMORROW MORNING!
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



//console output of 'yay';
console.log('yay');

//i mean, it is!  we're learning to code!  :)
console.log('Day 1 is great!');

console.log('How to plant trees below (Multi-line)');
/*
Get tree
Dig hole
Remove tree from planter
Place tree in hole
Fill hole with soil, fertilizer, and mulch
Water
Enjoy tree
*/

/**************************
VARIABLES

1-grammarAndTypes
  02-declarations.js
**************************/
/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/
  var a = 2;

  var     b      =      1; 
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

var x;
console.log('Declaration:', x); // Declaration: undefined

x = 10;
console.log('Initialization 1:', x); // Initialization 1: 10

x = 33;
console.log('Initialization 2:', x); // Initialization 2: 33

var y = 'Hello';
console.log('Both:',x, y); // Both: 33 hello

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6 *new version of JavaScript)
Const = also 'new'; declares unchangeable variables
*/

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty); // great! Wonderful!

today = 'Lovely!'
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

var x = true;

var y = false;
        (1)
1-Keyword for boolean - no quotation marks
*/ 

var on = true;
console.log(on); // true

let off = false;
console.log(off); // false
 

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

var empty = null;
console.log(empty); // null

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

var undef = undefined;// never do this
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
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

var rounded = 9999999999999999; // (One more 9) JS gives you space for 15 9s before it rounds up to 10
console.log(rounded); // 10000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// js rounds out at a certain number

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

// Quick Discussion : var a = Number('123'), turns strings into numbers. 



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

let firstName = 'Tyler';
let lastName = 'Shelton';
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';
let zipcode = 46038;

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // Tyler Shelton, 12175 Visionary Way, Fishers, IN 46038

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

let myName = "Autumn";
console.log(myName.length)

/*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*

*/
let myName = "Autumn";
console.log(myName.toUpperCase())

/*
Objects
*************
x`
*/


let car1 = {
  color: 'red',
  tires: 4,
  extras: 'A/C and Radio',
  cool: true
};

console.log(car1); // { size: 'large', quantity: 4, now: true }
console.log(typeof car1); // object

// Arrays => DANGER - DIFFICULT TO TEACH (ING)
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
