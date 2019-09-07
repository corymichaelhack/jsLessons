/*
    Folder Structure:
        javascriptSeptember2019
            javascriptLibrary
                0-prework
                1-jsFundamentals <-------- In CMD: mkdir 1-grammarAndTypes
                    1-grammarAndTypes (new folder)
*/

/*
************
  COMMENTS
************

    1-grammarAndTypes
        01-comments.js <-------- CREATE: in VSCode

    - what comments do for us:
    - communicate with other developers by writing in plain English
    - annotate certain sections of our code for our future selves
    - comments may feel unnecessary but the best way to understand code is to make a quick comment
*/

//console output of 'yay';
console.log('yay');

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

/*
************
  VARIABLES
************

    1-grammarAndTypes
        02-declarations.js <-------- CREATE: in VSCode

    - what is a variable?  Variables are named containers for storing data values.
    - we name the variables so that we can refer to this data again.
*/

let a = 2;

  let     b      =      1;
/*(1)    (2)    (3)    (4)

1- Keyword
2- Variable name
3- Assignment Opperator
4- Variable value
*/
console.log(a + b); // output: 3

/*
    notes on variables:
        - a variable name must begin with a letter, underscore, or dollar sign
        - numbers may follow the above characters, but cannot come first
        - javascript is case sensitive - 'hello' and 'HeLlo' are different variables
        - no spaces are allowed in variable names
        - camelCase is the best practice for naming variables.
        - this is good practice because it helps keep variables readable--  var myName = 'Autumn';
*/

/*
    Var, Let, and Const:

        - var: 'old' keyword for variables ** We wont be using this as often. If you have prior coding expirience and used var in the past, thats okay, but we want to try to stay in let

        - let: 'new' keyword for variables (introduced with ES6 *new version of JavaScript) For now best practice is to learn to use let

        - Const:  also 'new'; declares unchangeable variables
*/

/*
************
DECLARATIONS
************

    Declarations are the LEFT SIDE of a variable
        - it is simply: let x
        - declarations are on the left side of the assignment operator (=)

    Initializations are the RIGHT SIDE of a variable
        - it sets the value of the variable
        - it incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

let x;
console.log('Declaration:', x); // Declaration: undefined

x = 10;
console.log('Initialization 1:', x); // Initialization 1: 10

x = 33;
console.log('Initialization 2:', x); // Initialization 2: 33

let y = 'Hello';
console.log('Both:',x, y); // Both: 33 hello


// Const = 'new' in ES6: declares variables meant to remain unchanged


let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty); // great! Wonderful!

today = 'Lovely!';
console.log(today, elevenFifty); // lovely! Wonderful!

// elevenFifty = 'Super'
console.log(today, elevenFifty); // ERROR

/*
************
   TYPES
************

    1-grammarAndTypes
        03-types.js <-------- CREATE: in VSCode
*/

/*
BOOLEANS
************
    - a boolean has two possible vaules of either true or false
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL
************
    - null is an empty value. Think of it like an empty container: nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
UNDEFINED
************
    - no value is assigned and does not act as an empty container
*/

let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the varaible.
console.log(undef); // undefined

let correct; // write like this instead
console.log(correct); // undefined

/*
NULL vs. UNDEFINED
************
    - Null is like a container with nothing in it
    - Undefined is when a variable has never been set, or hasnt been created yet.

    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship
*/

/*
NUMBERS
************
    - numbers are literally just numbers. In JS, you dont need anything special to write them.
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

// Quick Discussion :
let a = Number('123') // turns strings into numbers.
console.log(a);

/*
STRINGS
************
    - strings are Datatypes used to represent text and are wrapped in either a single or double quote
    - strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others
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
OBJECTS
************
    - objects are used to store many values instead of a singular value
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
}

console.log(frodo);
console.log(typeof frodo);

/*
ARRAYS
************
    Arrays are containers that hold lists of items

    let list =  [  'item1',   'item2',    'item3'];
                     (1)        (2)         (3)

    1- name of the Array, or list;
    2- The Array is inside of these square brackets
    3- each item, regardless of datatype, is separated by commas

    Denoted by []
*/

let burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos); // OBJECT

/*
    - Why is typeof coming back with an object, and not array?

    - What is the definition of objects? A container that can hold multiple datatypes

    - Notice that arrays are also containers that can hold multiple datatypes.  Therefore, JS has classified arrays as objects and not a datatype of their own
*/

/*
ADDITION vs. CONCATENATION
************
    - when JS sees that we're trying to combe two or more numbers, it adds the values together using the built-in math functionality

    - when it sees using trying to add together one or more strings, instead of using the built in math functionality, it just tacks the strings onto the end of the previous string and doesn't try to synthesize the values
*/

let third = 1050 + '100';

console.log(third); // 1050100
console.log(typeof third); // string

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

let firstName = 'Zach';
let lastName = 'Maynard';
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';
let zipcode = 46038;

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // Autumn Henderson, 12175 Visionary Way, Fishers, IN 46038

/*
STRING: PROPERTIES
************
    - properties are qualities associated with a datatype.
    - strings have properties, or the qualities associated with that string.
    - the length of a string is a property.
 */

let myName = "Zach";
console.log(myName.length);

/*
STRING: METHODS
************
    - methods are tools that can help us manipulate our data.
    - .Property and .Methods()
        *no parenthesis for properties*
*/

let myNameIs = "Zach";
console.log(myNameIs.toUpperCase()); // method that changes a string to uppercase.

let home = 'My home is greenwood';
console.log(home.includes('greenwood')); // method that checks if a certain string is included in another string

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts ';
console.log(sent.split(''));


/*
************
QUIZ #1 - VARIABLES
************

    - announce first Canvas quiz. Due by 11:59pm THIS evening
*/