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
Note that scope applies to functions, objects, and arrays, just like it does to variables
*/

var x = 1;

function scope(){
  var x = 2;
  function scope(){
    var x = 3;
    console.log(x);
  }
  scope();
  console.log(x);
}
scope();
console.log(x);

//just as our 'x' variable is called according to the scope running at that time, 
//our 'scope' function is called according to the running scope, too

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

//array and object literals can hold primitive and 'complex' types (arrays, objects, functions)
let complexArrLiteral = [1, true, 'Academy', [1, 2, 3], {key: 'test'}, function(){return 'yes'}]

console.log(complexArrLiteral[5]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', 
arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}}

console.log(complexObjLiteral.func())

/**************************
ASSIGNMENT OPERATORS

5-expressionsAndOperators
  01-assignmentOperators.js
**************************/
// Assignment operator
let x = 5;

// Addition assignment
x += 1; // x = x + 1
console.log(x);

// Subtraction assignment
x -= 1; // x = x - 1
console.log(x);

// Multiplication assignment 
x *= 1; // x = x * 1
console.log(x);

// Division assignment
x /= 1; // x = x / 1
console.log(x);

// Remainder (or Modulus) assignment
x %= 2; // x = x % 1;
console.log(x);

// Exponential assignment 
x **= 2; // x = x ** 1
console.log(x);

/**************************
COMPARISON OPERATORS

5-expressionsAndOperators
  02-comparisonOperators.js
**************************/

// Equal 
console.log('3' == 3);

// Strict equal
console.log(3 === 3);

// Not equal
console.log('3' != 4);

// Strict not equal
console.log('3' !== 3);

// Greater than
console.log(3 > 2);

// Less than
console.log(2 < 3);

// Greater than or equal to
console.log(3 >= 2); // Not to be confused with => (explain why)

// Less than or equal to
console.log(2 <= 3);

// And
console.log(1<2 && 3>0);

// Or
console.log(1<2 || 3<0);

//note: the equality operator breaks down when comparing complex types
let obj = {key: 'test'};
console.log(obj == {key: 'test'});

/**************************
CONDITIONALS

1-jsFundamentals
  2-controlFlowAndError (new folder)
    01-if.js, 02-ifElse.js, 03-switch.js
**************************/

/**************************
IF
**************************/

//teaching note: falsey values--'undefined', 'null', 'NaN', '0', '', 'false'

let isOn = true;

if (isOn == true) {
  console.log('The light is on!')
};

if (isOn) {
  console.log('The light is on, yay!');
};

let weather = 65;

if (weather < 70) {
  console.log('Wear a jacket');
};

let string = 'Tyler';

if (string === 'Tyler' || false){
  console.log('if statements and conditionals are powerful!');
}


/**************************
IF ELSE
**************************/

weather = 75;

if (weather < 70) {
  console.log('Wear a jacket');
} else {
  console.log('No jacket necessary!')
}

//you can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather == 'string'){
  console.log('This weather is amazing!');
} else {
  console.log('Either the temperature is cool, the variable is not a string, or both');
}

/**************************
ELSE IF
**************************/

/* 
if-elseif statements can be chained
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
    console.log("Hey Tom, when will you bring sourdough bread for me?");
    break;
  case "Kenn":
    console.log("Hey Kenn, do you own a wolf in your backyard?");
    break;
  case "Carolyn":
    console.log("Hey Alecx, how many Magic cards do you own?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
}

// Switches with multiple conditions:

var yep = true;
switch (typeof yep == 'string' || typeof yep == 'boolean') {
  case (true): 
    console.log('yep is a string or a boolean');
    break;
  default:
    console.log('yep is not a string or a number');
}


/**************************
TERNARIES

5-expressionsAndOperators
  03-ternaries.js
**************************/

//What is a ternary?

var x = 6;

//Ternary:

(x > 0) ? console.log('x is positive') : console.log('x is negative');

// Instead of:

if (x > 0) {
  console.log('x is positive');
} else {
  console.log('x is negative');
}


//Conditional statements
let greeting = 'salutations!'

if (greeting.length > 10) {
  console.log("that's a long greeting!");
} else if (greeting.length == 10) {
  console.log('your greeting is exactly 10 characters');
} else {
  console.log("what a normal greeting");
}

//Ternary operators
(greeting.length > 10) ? console.log("that's a long greeting!") 
  : (greeting.length == 10) ? console.log("your greeting is exactly 10 characters") 
  : console.log("what a normal greeting")

/*
Ternaries, unlike conditionals, require the default/else catch all.  Where an if/else statement can 
go without the else, and a switch can go without a default, ternaries need that catch all at the 
end; otherwise it will throw an error.
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