/**************************
ASSIGNMENT 1 PRESENTATIONS
**************************/
/*
CSS Creature presentations:
Submit through LMS
Volunteers to walk us through their creature
*/

/**************************
ASSIGNMENT 2 - STATIC SITE - DUE MONDAY
**************************/

/*
Folder Structure:
  javascriptMay2018
    javascriptLibrary
      0-prework
      1-jsFundamentals
        1-grammarAndTypes
*/

/**************************
GIT LESSON

javascriptLibrary
  1-jsFundamentals (git repo here)
**************************/

/*
git init
git status
git add .
git commit -m "<message>"
*/

/**************************
SCOPE

1-grammarAndTypes
  03-scope.js
**************************/

/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

var x = 12

function scope() {
  var x = 33
  console.log(x);
}
scope()//33
console.log(x); //12

// Which value shows?

var x = 12

function scope() {
  x = 33 // HERE
  console.log(x);
}

scope() // 33
console.log(x); //33

/*
Why did this happen?

When you have the keyword var inside scope(), you are declaring a completely new variable; it just happens to have the same name of x.

However, when you remove var, you are no longer declaring another x variable, but you are EXPRESSING it with a new value; therefore, after that point, x no longer equals 12, but 33.
*/

/*
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? Well, check out the below:
*/

var x = 12

function scope() {
  var x = 33 // HERE
  if (true){
    var x = 45;
    console.log(x);
  }
  console.log(x);
}

scope() // 45, 45
console.log(x); //12
//what is the expected output from above?

var x = 12

function scope() {
  var x = 33 // HERE
  if (true){
    let x = 45;
    console.log(x);
  }
  console.log(x);
}

scope() // 45, 33
console.log(x); //12
//what is the expected output from above?

/*
Why is this happening?

This is a question of BLOCK SCOPE.  

What is block scope?  A BLOCK, simply put, is the part between {} in a function or conditional; inside a block is local scope.

Var does NOT have block scope built in.  It is not locked into only operating within those curly brackets, and can therefore bleed into a parent scope.  

Notice, here, we are nested within two blocks: varTest() or letTest() and the if statement.  If var is run, it can bleed from the if block into the varTest() block.  In effect, we cannot be too sure where var has access--elusive. 

Let DOES have block scope.  It is locked into which block it is located and cannot escape from those curly brackets.  This is particularly helpful when you want to run the variable only in that particular block without the danger of having it affect any other code.

Let's try with const:
*/

function constTest() {
  const scope = 1;
  if (true) {
    const scope = 2;
    console.log(scope); // 2
  }
  console.log(scope); // 1
}

constTest();

/**************************
HOISTING

1-grammarAndTypes
  04-hoisting.js
**************************/

console.log(scissors); //undefined
scissors = 'blue';

console.log(scissors); //blue
var scissors;

/*
Hoisting does not exist--it is an illusion

JS actually reads through your code twice, the first, it simply reads through, looking for the LEFT HAND SIDE of variables and functions; the declarations. Then, the second pass through, it reads through the RIGHT HAND SIDE, assigning values and expressions.

/**************************
LITERALS

1-grammarAndTypes
  06-literals.js
**************************/

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days.toString()); //Monday, Tuesday, Wednesday, Thursday, Friday

let tired = true;

let soup = {
  a: 'chicken noodle',
  b: 'tomato',
  c: 'beef and barley'
}
console.log(soup.c); //beef and barley

let car = 'Honda';

let dec = 10.2;

/**************************
ASSIGNMENT OPERATORS

5-expressionsAndOperators
  01-assignmentOperators.js
**************************/
// Assignment operator
let x = 5;

// Addition assignment
x += 1; // x = x + 1

// Subtraction assignment
x -= 1; // x = x - 1

// Multiplication assignment 
x *= 1; // x = x * 1

// Division assignment
x /= 1; // x = x / 1

// Remainder (or Modulus) assignment
x %= 1; // x = x % 1;

// Exponential assignment 
x **= 1; // x = x ** 1

/**************************
COMPARISON OPERATORS

5-expressionsAndOperators
  02-comparisonOperators.js
**************************/
//teaching note: falsey values--'undefined', 'null', 'NaN', '0', '', 'false'

// Equal 
'3' == 3;

// Strict equal
3 === 3;

// Not equal
'3' != 4;

// Strict not equal
'3' !== 3;

// Greater than
3 > 2;

// Less than
2 < 3;

// Greater than or equal to
3 >= 2; // Not to be confused with => (explain why)

// Less than or equal to
2 <= 3;

// And
2 && 3;

// Or
2 || 3;

/**************************
CONDITIONALS

1-jsFundamentals
  2-controlFlowAndError (new folder)
    01-if.js, 02-ifElse.js, 03-switch.js
**************************/

/**************************
IF
**************************/

let isOn = true;

if (isOn == true) {
  console.log('The light is on!')
};

if (isOn) {
  console.log('The light is on, yay!');
};

let isOff = false;

if (isOff == false){
  console.log('The light is off!');
}


weather = 65;

if (weather < 70) {
  console.log('Wear a jacket');
};


/**************************
IF ELSE
**************************/

weather = 75;

if (weather < 70) {
  console.log('Wear a jacket');
} else {
  console.log('No jacket necessary!')
}

/*
Challenge: 
Write an if else statement that checks your name; 
If it is your name, console.log 'Hello, my name is <your name>'; 
If the name does not match, console.log 'Hello, what is your name?'
*/

var name = 'Tyler';

if ('Tyler' == name) {
  console.log('Hello, my name is', name);
} else {
  console.log('Hello, what is your name?');
}


/*
 Challenge: 
 Capitalize the FIRST LETTER of name ONLY
*/

var name = 'tyleR';

if (name[0] == name[0].toUpperCase()) {
  firstLetter = name[0] + name.slice(1).toLowerCase()
	console.log(firstLetter);
} else {
  otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
	console.log(otherLetters);
}


/**************************
ELSE IF
**************************/

/* 
Challenge:
Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}


/**************************
SWITCH
**************************/

var friend;

switch (friend) {
  case "Tom":
    console.log("Hey Tom, when are you going rock climbing?");
    break;
  case "Kenn":
    console.log("Hey Kenn, wanna play Catan?");
    break;
  case "Carolyn":
    console.log("Hey Carolyn, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`); // EXPLAIN STRING INTERPOLATION
}

/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

var dessert = 'carrots';

switch (dessert) {
  case 'pie':
    console.log('Pie, pie, me oh my!');
    break;
  case 'cake':
    console.log('Cake is great!');
    break;
  case 'ice cream':
    console.log('I scream for ice cream!');
    break;
  default: 
    console.log('Not on the menu.');
}

// Switches with multiple conditions:

var yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}


/**************************
TERNARIES

5-expressionsAndOperators
  03-ternaries.js
**************************/

//What is a ternary?

var x = 6;

//Ternary:

(x > 0) ? console.log('yes') : console.log('no');

// Instead of:

if (x > 0) {
  console.log('yes');
} else {
  console.log('no');
}


//Conditional statements
if (x == 0) {
  console.log("hello");
} else if (x < 0) {
  console.log("hi");
} else {
  console.log("goodbye");
}

//Ternary operators
(x == 0) ? console.log("hello") : (x < 0) ? console.log("hi") : console.log("goodbye")

/* Challenge:
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}

*/

var age = 10;


(age >= 25) ? console.log('Yay! You can rent a car!') : (age >= 21) ? console.log('Yay! You can drink!') : (age >= 18 ) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");


// And with multiple conditions (like the switch statement):

var yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}


let yep = -8;

(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked!') : console.log('did\'t work');

/*
Ternaries, unlike conditionals, require the default/else catch all.  Where an if/else statement can go without the else, and a switch can go without a default, ternaries need that catch all at the end; otherwise it will throw an error.
*/

/**************************
REPL.IT ASSESSMENT 1
**************************/

/**************************
RECAP
**************************/

/*
Git
Scope
Hoisting
Literals
Assignment Operators
Comparison Operators
Conditionals
Ternaries
*/

// Repl.it Assessment 1 - DUE BY THURSDAY MORNING
