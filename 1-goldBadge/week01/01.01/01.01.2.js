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
// What is a variable?
var a = 1; 
var b = 2; 
console.log(a + b); // 3

//notes on variables:
//1)  a variable must begin with a letter, underscore, or dollar sign
//2)  numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables

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
Let = 'new' keyword for variables (introduced with ES6)
Const = also 'new'; declares unchangeable variables
*/

let today = 'great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty); // great! Wonderful!

today = 'lovely!'
console.log(today, elevenFifty); // lovely! Wonderful!

// elevenFifty = 'Super'
console.log(today, elevenFifty); // ERROR

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

// Null
/* 
Null = empty value (not 0; not undefined)

It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

var empty = null;
console.log(empty); // null

// Undefined
/*
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

var undef = undefined;
console.log(undef); // undefined

let grass;
console.log(grass); // undefined

/*
We've talked before about how every variable is basically a storage container in JavaScript
think of variables with null and undefined as packages coming out of UPS
null packages are packages that were intentionally packed up with nothing, but have been assembled
undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

// Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

var rounded = 9999999999999999; // (One more 9)
console.log(rounded); // 10000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

// Quickly discuss number objects (in GitBook Javascript Fundies 6.1)

// Strings
// Strings = any value within quotes; JS spits out value within the quotes
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
What's going on here?
Addition vs. Concatenation

When JS sees combining two or more numbers, it adds the values together using the built-in math functionality; when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator--it smashes the values together without trying to synthesize the values
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

// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a comma
*/
let burritosNow = {
  size: 'large',
  quantity: 4,
  now: true
};

console.log(burritosNow); // { size: 'large', quantity: 4, now: true }
console.log(typeof burritosNow); // object

// Arrays => DANGER - DIFFICULT TO TEACH
/*
Arrays are great for lists

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

REMINDER: your CSS Creature is DUE BY TOMORROW MORNING!
*/