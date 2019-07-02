/**************************
RECAP
Peer coding challenge - One person drives/types  other person decides what to type, then switch
**************************/
// PEER CODING CHALLENGE!!! 1 computer with 1 person driving.
// Create 3 conditional operators to check the type of the conditional example.

let stringExample = 'string';
let numberExample = 0;
let boolExample = true;
let conditionExample = 0;


if (typeof conditionExample === 'string') {
  console.log('Yep, A is A.');
} else if (typeof conditionExample === 'number') {
  console.log('Numbers are cool.');
} else if (typeof conditionExample === 'boolean') {
  console.log('Truthiness');
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
let day3 = (typeof conditionExample == 'string') ? "Good thing he was just a red shirt." : (typeof conditionExample == 'number') ? "I SAID NUMBERS ARE COOL!" : (typeof conditionExample == 'boolean') ? "is the bestest way." : "Error"

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

let FB = 15;

if (FB % 3 === 0 && FB % 5 === 0) {
  console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
  console.log('Buzz');
} else if (FB % 3 === 0) {
  console.log('Fizz');
}

let FB = 30;




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

let FB = 30;

(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz') : console.log(FB);


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

/**************************
FOR LOOPS
**************************/
/*
* Performs logic over data.
* Loops offer a quick and easy way to do something repeatedly
  *A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

  * EXAMPLE 1: hungry => eat => check if still hunger => no? => keep eating => check if still hunger => full? YES!
  * EXAMPLE 2: const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul']; now how do I console.log each item? (console.log(vacationSpots[])). What if I had 100's of items in my list?

* There are many different kinds of loops but they all do roughly the same thing:
  *For statement
  *Do while statement
  *While statement
  *Labeled statement
  *Break statement
  *Continue statement
  *For in statement
  *For of statement

* NOTE: There is a danger of infinite loops. There are three main parts to a loop. 
* 1) The 'for' keyword
* 2) A variable initialization and declaration. 
* 3) The condition that needs to be met in order to end the loop.
* 4) This is where the number is going to update. This one is saying each time this loop runs, update i by one. 
* 5) Inside of the code block for the loop, refers to the current value of the variable for that loop 
*/
//  (initialization ; stopping condition; iteration statement)
for (let i = 0; i < 10; i++) {
//*(1)     (2)    (3)     (4)
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
//           (5)
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
let name = "Kenn";

for (let i = 0; i < name.length; i++) {
	console.log(name[i]); // K e n n
}
 
for( n of name){
  console.log(n);
}
/*
Challenge: 
Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)
*/
let sum = 0;

for (let i = 1; i <= 50; i++) {
   sum += i;
}

console.log(sum); //1275

/**************************
FOR IN LOOPS
**************************/
/*
Great for iterating over values in an object
for in loops can "enumerable" which in our situation means able to be able to access these directly within an ordering schema
*/

let student = { name:"Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item in student) {
  console.log('item => ', item); // name awesome degree week
  console.log('student[item] => ', student[item]); // Peter true JavaScript 1
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat in catArray){
  console.log(cat);
}

let dogArray = ['collie', 'pitbull', 'newfoundlander', 'st bernard', 'dachshund'];
for (dog in dogArray){
  console.log(dog);
}

/*
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
*/

let studentName = 'pAul';
let capName;
for (let n in studentName) {
  if (n == 0) {
    capName += studentName[n].toUpperCase();
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
The for...of statement creates a loop Iterating over iterable objects, meaning it can numberically look over these items.
Use for of to iterate over ARRAYS
"iterable" meaning able to parse through with numbers
*/

//the below doesn't work--object properties are not 'iterable'
let student = { name:"Peter", awesome: true, degree: "JavaScript", week: 1 };
for (item of student) {
  console.log(item); // name awesome degree week
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
// console.table(catArray)

for (cat of catArray){
  console.log(cat, 'says meow'); // tabby, brittish shorthair, burmese, maine coon, rag doll ...says meow
}

/**************************
FUNCTIONS

From MDN Functions are a set of statements that perform a task or calculates a value. 



4-functions
  01-declarations.js, 02-expressions.js, 03-callingFunctions.js
**************************/

// A block of code that performs/logic task. Oven

/**************************
DECLARATIONS
*************************

Functions 
******************
A chunk of code that performs a set action when called, or 'invoked'.

function  hi()   {
  (1)      (2)  (3)
  console.log('HI')
}
1- Keyword 
2- Name of the function, and parenthesis for parameter
3- Curly Brace, where the opperations of our function happens

//A chunk of code that performs a set action when called, or 'invoked'.

function  hi()   {
  (1)      (2)  (3)
  console.log('HI')
}
//1- Keyword 
//2- Name of the function, and parenthesis for parameter
//3- Curly Brace, where the opperations of our function happens



/**************************
EXPRESSIONS
**************************/
// set a variable to be a function
let hi = function hi() {
  console.log('HI')
}

var hey = function hi() {
  (1)
  console.log('HI')
}

//1- The variable 'hey' is now representative of the function 'hi()'



/**************************
ANONOYMOUS FUNCTIONS
**************************/
let hi = function () {}

function hi() {
  console.log('HI');
}

/************************
EXPRESSIONS
*****************/
var hey = function hi() {
  (1)
  console.log('HI')
}

// 1- The variable 'hey' is now representative of the function 'hi()'

/*
Difference between declaration and expression:
Declaration gets hoisted
Expression does not
*/
 
/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi() {
  console.log('HI');
  return "Hi";
}

// hi // nothing
// hi() // HI
// console.log(hi); // [function = hi]
console.group(hi()); // HI    undefined
//no return 
/*
Why is the second value undefined when we console.log hi() but not when we console.log hi? 
What are the parentheses doing?

The parenths after a function IMMEDIATELY INVOKE said function.

Invoking or calling is like pushing the start button on a machine. Example: an oven does not work until you turn it on.
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
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/ /*
4-functions
  05-parameters.js
**************************/

/*
Parameters are like empty storage boxes that we can name whatever we want. 
It only matters what the name is when you are calling the paramter within the function => they have to match

You can have multiple parameters for a single function

You give the value that you want to put in that storage box (parameter) when you call the function.
Example: To create coffee in a coffeemachine things need to go in: ground coffee, water, a filter. The coffeemachine performs/runs the function.
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
console.log 'Hello, my name is Ingeborg Slegers'
Call your function 
*/

function myName(fName, lName) {
  let fullName = fName + ' ' + lName; 
  console.log(`Hello my name is ${fullName}.`);
}

myName('Ray', 'Hancock');

/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}


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
// Concise Body does not need parantheses, unless you have more than one parameter.
let apples = x => console.log(`There are ${x} apples.`);
apples(10);
// More than one parameter will require parenthesis
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
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/
/*
Functions are like the engines of JS where they will perform a specific function and produce a desired effect.
  With the return keyword, we are pulling away from using console.log to show the output of a function in the terminal, and spitting out a value that we can then grab and place in another part of your code => we can effect change on your actual website with the return keyword, where console.log would only work in the dev tools (for example).

It is like Chicken Run where the people create a huge machine that takes in chickens (like a parameter) and spits out chicken pot pies.  The return keyword is the chicken pot pie.  The function is doing all of the cutting, pie making, gravy filling, etc. and the return is simply giving the pie.  We can then take the pie and put it in something else...

Example: Coffeemachine where we pass in coffee grounds. The machine runs the function and returns a lovely delicious caffeinated beverage. 
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
   console.log(capName) // Autumn
   return capName
}

// console.log(capName) // Error, not defined

const myName = captializeName('autumn');

console.log(myName + ' how are you doing?'); // Autumn how are you doing?

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

/* write new challenge with coffee */



//**********************/
//Constructor Function 
//**********************/

//Functions are terific ways to, using parameters, create a unique solution for different circumstances. Say we needed several different objects, all with the same keys but different values. I could do this one of two different ways
 //1
 let person1 = {
   name:'Macy', 
   age: 24, 
   canVote: true
 };

 let person2 = {
  name:'Jeremy', 
  age: 15, 
  canVote: false
 };

 let person3 = {
  name:'Felicity', 
  age: 38, 
  canVote: true
 };

 //Thats a lot of repetitive coding! There has to be a better way to be able to create multiple objects that have the same structures with different values? Yes! And theyre called constructor functions!

 function Person(name,age,canVote){
// (1)      (2)       (3)
   this.name = name;
// (4)  (5)    (6)
   this.age = age;
   this.canVote = canVote;
 }

 let person4 = new Person('James',80,true); 
 //            (7)   (8)



/*
1 - The function keyword
2 - The function name. For Constructor functions, the name should be capitolized. 
3 - The parameters. These will be the values of the object once this function is in use. 
4 - The 'this' keyword. 'this' gives us the ability to refer back to whatever called, or activates it. In this case, 'this' refers to 'Person'. 
5 - This will be the key of the new object we will create. This is NOT refering to the parameter
6 - This is refering to the parameter we pass through our constructor function 
7 - The new keyword is calling our 




 */
function people(name,age,canVote){
  let people  = {}; 
     people.name = name;
     people.age = age;
     people.canVote = canVote;
     return people;
   }
  
   let people4 = new people('James',80,true); 
   console.table(people4);
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