/**************************
ASSIGNMENT 1 PRESENTATIONS
**************************/
/**
 * 
 * CSS CREATURES DUE!
 * 
 *https://drive.google.com/drive/folders/1BqScvEx1F32hDKnBYLHPKKNj_ZM1Qmes
 */

/*
Overviews for Today
******************
Git
Scope
Hoisting
Literals
Assignment Operators
Comparison Operators
Conditionals
Ternaries
*/



/*

Open Cmd Prompt
DIR to see where you are
CD into your folder




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
  1-jsFundamentals (GIT REPO HERE!!!)
 
  GitHub- signup if you havent yet
  Make a repo, copy repo

**************************/

/* 

GIT is a revision control system, a tool to manage your source code history. 
GITHUB is a hosting service for Git repositories. 

So they are not the same thing: Git is the tool, GitHub is the service for projects that use Git.

*/

/*
git init
git status
git add 
git commit -m "<message>"
git remote add origin *paste repo here*

*/

/**************************
SCOPE

1-grammarAndTypes
  03-scope.js
**************************/

/*
Scope
*********

* Today were going to start by talking about Scope. When someone mentions "scope" in a javascript context they're speaking basically when variables are and aren't accessible in your code.

* Think about javascript as the planet earth. This would be considered the global scope. WE live in indianapolis, which could be considerd our local scope. Just because someone lives on earth does not mean they live in indianapolis, but residents of indianapolis are on planet earth. 

* Refers to where a variable is defined and accessable.

    * JavaScript has function scope: Each function creates a new scope.

    * Scope determines the accessibility (visibility) of these variables.

    * Variables defined inside a function are not accessible (visible) from outside the function.

* JS has both LOCAL and GLOBAL scope

* Local = like Indianapolis
* Global = like Earth

* Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet

NO CODING - JUST WATCH PLEASE!
*/


var x = 12;
// This is something we havent seen before. This is a function. Pay attention to the curly {} braces, this is what decides whats inside and outside of our function
function scope() {
  var x = 33;
  console.log(x);
}
scope();//33
console.log(x); //12
 

var y = 12;

function scope() {
  y = 33; // HERE
  console.log(y);
}

scope() ;
console.log(y);

/*
Why did this happen?

In the first example, we initialize and declare a variable x. Then inside the function, we declare and initialize a NEW variable. Same name, but it technically becomes a different variable. Just like my name is Autumn, but I am not the only Autumn in the world. 

In the second example, we initialize and declare a variable y. Then inside the function we are re-initializing the SAME variable! Were giving the variable a new value, so even when we leave the scope of the function, the value of the variable has been changed. Before 1990, if someone mentioned beyonce, we wouldnt know who they were talking about. Now when I say Beyonce, you all assume I am talking about Beyonce the Singer, not any other Beyonce. Because we havent protected our variable values, they can be reassigned without us meaning to. Therefore, after that point, x no longer equals 12, but 33.
*/

/*  
Var vs. Let:

Remember how, since ES6, we now have three keywords for variables: var, let, and const?

Const is pretty straight forward; it is a constant that cannot be re-expressed.

Var and let seem to operate the same, right? So why do we insist on using let excusively? Well, check out the below:

NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/

var x = 12;

function varTest() {
  var x = 33;
  if (1 == 1){
    var x = 45;
    // console.log(x);//45
    console.group(x);
  }
  // console.log(x);//45
  console.group(x);
}

varTest();
// console.log(x); //12
console.group(x);

//what is the expected output from above? Global scope for x is 12. Inside the function code block ( curly {} braces) a new variable(again, same name, different variable) is declared and initialized (var key word). Inside of the function something we havent seen before, called a conditional statement. We will go more into depth later but understand for now if the statement inside the parenthesis are true, we go inside the block. Since this statement is true, inside the block, we declare and initialize the variable AGAIN. Inside this block, when we console.log() x, JS assumes were refering to the x inside the block with us. 

var x = 12;

function letTest() {
  // var x = 33 // HERE
  if (true){
    let x = 45;
    console.log(x);
  }
  console.log(x);
}

letTest(); // 45, 33
console.log(x); //12
//what is the expected output from above?

/*
Why is this happening?

This is a question of BLOCK SCOPE.  

What is block scope?  A BLOCK, simply put, is the part between {} in a function or conditional; inside a block is local scope.

Var does NOT have block scope built in.  It is not locked into only operating within those curly brackets, 

and can therefore bleed into a parent scope.  It can be refered outside of those scopes. 

Notice, here, we are nested within two blocks: varTest() or letTest() and the if statement.  

If var is run, it can bleed from the if block into the varTest() block.  In effect, we cannot be too sure where var has access--elusive. 

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

console.log(scissors);
var scissors;

/*
Hoisting does not exist--it is an illusion - code doesn't actually get moved.

JS actually reads through your code twice, the first, it simply reads through, looking for the LEFT HAND SIDE of variables and functions; the declarations. We call it 'hoisting'  because js keeps those variables stored in memory, for qiucker reference  later. 
Then, the second pass through, it reads through the RIGHT HAND SIDE, assigning values and expressions.
JS DOES grab things like functions */

/** We can think of it as entering a party. We might look across the room and see some people we know, and we make a mental note 'Talk to James. Some of those people we might already know exactly what our conversation will be about, but for some people, we know their name but we dont know what the conversaton will be about.  */

b();
console.log(a);

function b(){
  console.log('This is all hoisted!');
}
var a = 'This is not hoisted';

// In this scenario, the function is 'hoisted' and remembered the first time javascript passes over, its keeping the entire function stored in memory. So even though its being called before the function is actually declared.




// When JS reads over the code twice, the first time, it remembers the declarations and stores it in its memory bank. 
// Scanning a party, the one that it knows/recognizes, already knows what its going to talk about with that person.

/**************************
LITERALS

**************************/

/* 
  The JavaScript syntax defines two types of values: Fixed values and variable values.

  Fixed values are called literals. 
  Variable values are called variables.

  A Literal is a value written exactly as it’s meant to be interpreted. You are literally providing them to your JS. 

  Literals include Arrays(Lists),
   Integer(Numbers), Booleans(True or false), 
   Objects(key:value pairs),
   String(chars between quotation marks)
  
  Literals feel tricky, but really theyre just values that you yourself have added to the code. 
*/

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days.toString()); //Monday, Tuesday, Wednesday, Thursday, Friday
//this is a method that comes built into javascript to help us separate an array into strings
console.log(days.length);
//this is a property of arrays. Properties are things that already belong to an object


let tired = true;
//A value of truth or false

let soup = {
  a: 'chicken noodle',
  b: 'tomato',
  c: 'beef and barley'
};
/*
objects are key value pairs, which just means in an object there are keys(what the name of this part of the object is), 
and a value for that key. 

*/
console.log(soup.c); //beef and barley
//this is dot notation for an object. This is a way we can dig through an object and get the data we want back

let car = 'Honda';

let dec = 10.2;

/**************************
ASSIGNMENT OPERATORS

5-expressionsAndOperators
  01-assignmentOperators.js
**************************/
// Assignment operator
let r = 5;

// Addition assignment
r += 1; // r = r + 1

// Subtraction assignment
r -= 1; // r = r - 1

// Multiplication assignment 
r *= 1; // r = r * 1

// Division assignment
r /= 1; // r = r / 1

// Remainder (or Modulus) assignment
r %= 1; // r = r % 1;

// Exponential assignment 
r **= 1; // r = r ** 1

/**************************
COMPARISON OPERATORS

5-expressionsAndOperators
  02-comparisonOperators.js
**************************/
//teaching note: falsey values--'undefined', 'null', 'NaN', '0', '', 'false' 
//These are values that are considered not true or just not, but they are not technically the same as false

// Equal 
'3' == 3;
/*JavaScript does a nice thing called coersion, where it assumes that when youre comparing the integer 3 and the string '3', 
you must think theyre supposed to be the same thing  */

// Strict equal- This overrides javascripts coersion
3 === 3;

// Not equal
console.log('3' != 3);

// Strict not equal3
'3' !== 4;

// Greater than
3 > 2;

// Less than
2 < 3;

// Greater than or equal to
3 >= 2; // Not to be confused with => (fat arrow functions, which we will dig into later)

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


Bronze: 
Write an if else statement that checks your name; 
If it is your name, console log '<name>'
If the name does not match, console.log 'Hello, what is your name?'

Silver:
If It is your name, console log 'Hello, my name is <name>'

Gold:
If it is not your name, console log 'Hello, is your name <name here> ?'
*/

var name = 'Jenny';

if ('Autumn' == name) {
  console.log('Hello, my name is', name);
} else {
  console.log('Hello, is your name',name);
}


/*
Challenge: 
**********
Use this string - let name = 'aUTuMN';

Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 

Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 

Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase

*/

let name = 'tyleR';

if (name[0] == name[0].toUpperCase()) {
  firstLetter = name[0] + name.slice(1).toLowerCase();
	console.log(firstLetter);
} else {
  otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	console.log(otherLetters);
}


/**************************
ELSE IF
**************************/

/* 
Challenge:
Look up the format for an Else If statement

Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let age = 30;

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
Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument being evaluated 
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary 

**************************/

var friend="Bob";

switch (friend) {
  case "Autumn":
    console.log("Hey Autumn, when are you going rock climbing?");
    break;
  case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;
  case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`); // EXPLAIN STRING INTERPOLATION
}

// String interpolation allows us to create a placeholder for the value of a variable that we choose to assign.
// The last switch is a default statement, which is selected when the vairable passed 
// doesnt match any of the options given. This is optional, not necessary. 



/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'carrots';

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

let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didn\'t work');
}


switch (key) {
  case value:
    
    break;

  default:
    break;
}
//Self Practice:
//Try to rewrite the age challenge from earlier with a switch


/**************************
TERNARIES

5-expressionsAndOperators
  03-ternaries.js
**************************/

//What is a ternary? Shorthand version of an if else if statement.

//What is a ternary? A great way to write a single line for an if/ if else statement

let w = 6;

//Ternary:

(w > 0) ? console.log('yes') : console.log('no');

// Instead of:
if(w>0){
  console.log('Yes');
}else{
  console.log('No');
}




//Conditional statements
if (w == 0) {
  console.log("hello");
} else if (w < 0) {
  console.log("hi");
} else {
  console.log("goodbye");
}

//Ternary operators
(w == 0) ? console.log("hello") : (w < 0) ? console.log("hi") : console.log("goodbye")

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

let age = 10;


(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay! You can drink!') : (myAge >= 18 ) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");


// And with multiple conditions (like the switch statement):

let yep = -8;

switch (true) {
  case (yes < 0 && yes > -10): 
    console.log('worked');
    break;
  case (yes > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}



(yes < 0 && yes > -10) ? console.log('worked') : (yes > 0) ? console.log('worked!') : console.log('did\'t work');

/*
Ternaries, unlike conditionals, require the default/else catch all. 
 Where an if/else statement can go without the else, and a switch can go without a default, ternaries need that catch all at the end; otherwise it will throw an error.
*/






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

// Challenge 1 - DUE BY THURSDAY MORNING
// Quiz in canvas called OPERATORS - DUE BY 10PM
