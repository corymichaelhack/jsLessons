/**************************
WHITEBOARD 2 - FIZZ BUZZ TEAM EXERCISE (Conditionals and Loops)
**************************/
/*
Challenge:
Write a for loop running between the numbers 0 - 100
For multiples of 3, instead of the number, console.log "Fizz"
For multiples of 5 console.log "Buzz";
For numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
For any other number, console.log the value
*/


function fizzBuzz() {  
  for (var i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
      console.log('Fizz');
    }
    else if (i % 5 == 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

fizzBuzz();

var fb = 10;

if (fb % 15 == 0) {
  console.log('fizzbuzz');
} else if (fb % 5 == 0) {
  console.log('fizz');
} else if (fb % 3 == 0) {
  console.log('buzz');
} else {
  console.log('nothing');
}

for(let FB = 0; FB<=100;FB++){

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
    default :
    console.log(FB); 
  }
  
}

/**************************
GIT REVIEW - Why git? 
**************************/
/*
Git init
Git status
Git add .
Git commit -m "<message>"
*/

/*
Overviews for today
********************
Arrays
Objects
Git with GitHub
*/




/**************************
ARRAYS

9-arrays
  02-populating&Referring.js, 03-length.js, 04-iterating.js, 05-methods.js
**************************/
/*
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

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

let list = ['orange', 'banana', 'oreos']

console.log(list[1])

// Overview/Calling

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']]

console.log(typeof students); //object
console.log(students instanceof Array); //true
console.log(students[2]) //Rhys
console.log(students[1]) //Rhys

/*
Notice how we pull a value out of an array?  We append a [] with the index number of where the value is located (remember that JS starts counting at 0, not 1)
*/

/*
Challenge:
Go into the nested array and get 'Amira'
print out "Hello Amira, you look nice today"
*/

let name = students[6][2];
console.log(`Hello ${name}, you look nice today.`);

// Populating/Referring

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (f in food) { 
  console.log(food[f]) // Pecan pie, Shrimp, Quesadilla, Cheese cake, Hotdog
}
food.push('Pizza'); // Appends Pizza to end of array
food.splice(1, 1, 'Bananas') // Removes Shrimp and adds Bananas => (position, how many to cut, what to add in that location)
food.splice(2, 0, 'Sweet Potato Pie') //Adds Sweet Potato Pie in position 2 but doesn't remove anything
food.pop();  // Removes Pizza
food.shift();
food.unshift();


for (f of food) {
  console.log(f)
}

// Iterating

food.forEach(f => { console.log(f); }) // Pecan pie, Bananas, Sweet Potato Pie, Quesadilla, Cheesecake, Hotdog
food.forEach((food, number) => { console.log(number); console.log(food) }) // 0 Pecan pie 1 bananas 2 sweet potato pie...

/*
Challenge (Go look at MDN docs to remind you):
Create a list (with an array) of movies
Use .forEach() to list your movies
Add another movie at the end 
And replace one of your existing movies with another one 
*/

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.push('Force Awakens')
movies.splice(3, 1, 'Obi Wan')

movies.forEach(f => { console.log(f) })

// Length and others

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length); // 10

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
// console.log(colors.length) // 6
// console.log(colors.toString()) // blue, green, yellow, red, orange, purple

// console.log(typeof colors) // object
// console.log(typeof colors.toString()) // string

// colors.forEach(c => console.log(c)) // blue green yellow red orange purple

/*
Challenge:
First check if you are working with an array
Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
Using a method only, print the values of the newly arranged array
*/

//Example array:
// let arr = [1,2,3,4,5]
let arr = new Array(1,2,3,4,5)
// console.log(arr)

if (arr instanceof Array === true) {
  let revArr = arr.reverse()
  revArr.forEach(a => console.log(a))
}

/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 





11-objects
**************************/

let netflix = {
  id: 9,
  name: "Super Store",
  season1: {
    seasonInfo: {
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Magazine Profile" },
        { episode: 3, episodeName: "Shots and Salsa" },
        { episode: 4, episodeName: "Mannequin" },
        { episode: 5, episodeName: "Shoplifter" },
        { episode: 6, episodeName: "Secret Shopper" },
        { episode: 7, episodeName: "Color Wars" },
        { episode: 8, episodeName: "Wedding Day Sale" },
        { episode: 9, episodeName: "All-Nighter" },
        { episode: 10, episodeName: "Demotion" },
        { episode: 11, episodeName: "Labor" }
      ]
    }
  },
  season2: {},
  season3: {}
};

/*
How do we access data with objects?  Where arrays used the [value] appended to the end of it, objects use dot notation.
*/

console.log("All data:", netflix); // All data: { id: 9, name: 'Super Store', season1: { seasonInfo: { episodeInfo: [Object] } }, season2: {}, season3: {} }
console.log("Just season info: ", netflix.season1.seasonInfo); // Just season info: { episodeInfo: [{ episode: 1, episodeName: 'Pilot' }, ...]}
console.log("Episode Number: ", netflix.season1.seasonInfo.episodeInfo[4].episodeName); // Shoplifter

/*
Challenge:
Pick an episode to show.
Using dot notation, walk through the netflix object and print off both the episode and the episode name.
*/


// JSON

var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
      "when": "$(basename).ts"
    },
    "**/*.js.map": {
      "when": "$(basename)"
    }
  },
  "editor.fontFamily": "Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]": {},
  "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact"
  },
  "html.format.indentInnerHtml": true,
  "editor.fontSize": 11,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.port": 3500,
  "[javascriptreact]": {}
}


// Object.keys() and Object.values()



console.log(Object.keys(spaceJam.toonSquad)); // ['human', 'rabbit1', 'rabbit2', ...]
console.log(Object.keys(spaceJam.toonSquad.duck)); // ['0', '1', '2', ... '9'] => (Just gives the index numbers of 'Daffy Duck')
console.log(Object.keys(spaceJam.toonSquad).toString()); // human, rabbit1, rabbit2, ...

console.log(Object.values(spaceJam.toonSquad)); // ['Michael Jordan', 'Bugs Bunny', 'Lola Bunny', ...]


// Square Bracket Notation
//Square bracket notation can help us be able to find a value in an object. This way can be 
//handy if we need to set a key to a variable and then use that variable to parse through an object
//It works simply bc of the fact that all property keys( before the colon) are strings

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  "water": true,
  sun: true,
  size: 10
};

console.log(garden.water); // 'zucchini'
//This is standard dot notation for parsing through an object. with this way, we are assuming that there is a key named vegitables

let x = 'vegetable';// what if we have a variable that contains our 'supposed key'? 
//can we use square brackets to reach into our object to find this data!

console.log(garden.x, garden[x]); // undefined 'zucchini'

let baking = {};
baking['zucchini'] = 'better make some bread!';
//we can also set a key/value pairing with square brackets, just like we can with dot 

// console.log(baking.garden.vegetable);
// Will this work? No, bc were assuming that there is an a key called vegetable inside of an obj called garden inside of an obj called baking. 

console.log(baking[garden['vegetable']]); // 'better make some bread!'
// Using square brackets is a good idea when you may not be able to directly dot notate through the obj, and we can use variables or a string instead




let key = 'water';

Object.keys(garden).forEach(g => {
  // console.log(g)
  if (key === g) {
    console.log(garden[key]); // true
  }
});
//great example of needing to use a variable to substitute for a different key, search for that key, and then, using square bracket notation bc its a variable and not part of the object, console.log it

/**************************
GIT PUSH
**************************/
/*
Git add .
Git commit -m "message"
Set up repo in GitHub
Copy both lines and paste in terminal => run code
Refresh page

DEPLOY - GitHub Pages
*/

/*
Explain why GitHub is important
*/

/*
Create local and remote repo for Store Front App

Folder Structure:
  javascriptMay2018
    javascriptLibrary
    projects
      storeFront (Git repo here)
*/

/**************************
REPL.IT ASSESSMENT 2
**************************/

/**************************
RECAP
**************************/

/*
Fizz Buzz Team Exercise
Arrays
Objects
Git with GitHub
*/

//Repl.it Assessment 2 - DUE BY TOMORROW MORNING

// Lab time