/* *****************
  DOM manipulation
*******************/

// https://github.com/IngeborgSlegers/HP_DOM_Manipulation

// Now that we know how to work with HTML/CSS and JavaScript, it's time for us to start combining what we have learned so far. 
// ! What is the DOM? Document Object Model
// We can think about 

// Clone Newt's To Do List Repo
// Add <script>tag at bottom of file.

//Let's start by accessing a single element from our HTML file. 

// the method below selects the element with the id of listTitle
let Newt = document.getElementById('listTitle');
console.log(Newt);

//the code below selects the first li element inside the first ul
let NewtItem = document.querySelector('ul li');
console.log(NewtItem);

/* Extra code */
// centers the title
Newt.style.textAlign = 'center';
// this changes the color to red
NewtItem.style.color = 'red';

// Accessing Multiple Elements;
// ---------------------------

// When accessing multiple elements, a node list is returned. 
// It is not an array but it works like one. So you can loop through it and use the length property to get the size of the node list. 
// If you want to get a specific element you can either use the array notation or the item method.

// For accessing multiple elements we are going to use three methods: 
//   getElementsByClassName, 
//   getElementsByTagName, and 
//   querySelectorAll. 

let grocery = document.getElementsByClassName('groceryItem');
// console.log(grocery instanceof Array);
console.log(grocery); //prints node list
console.log(grocery[2]); //prints 'Boom Berry Juice'
console.log(grocery.item(2)); //also prints 'Boom Berry Juice'


let liTag = document.getElementsByTagName('li');
console.log(liTag); //HTMLCollection
let selectAll = document.querySelectorAll('ul li');
console.log(selectAll); //nodeList

//Difference between HTMLCollection and nodelist:
//  * both are colletions of DOM nodes
//  * node is used as a generic term, for everything.
//  * An HTMLCollection object is an array-like list (collection) of HTML elements.

//! DO MORE RESEARCH ON DIFFERENCE BETWEEN HTMLCOLLECTION AND NODELIST


// DOM TREE AND ACCESS NODES;
// -------------------------
// DOM tree link: https://docs.google.com/document/d/1ph1pd8SoPS_V-QtBYn6nECeqyPi9oVXzYU49p-zYwNc/edit#heading=h.vrsap0l5d93k

// So far we have learned to access specific items. But what if we want to access elements next to elements we have already accessed?

console.log(document.body.childNodes) //returns the children
// Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.
// The childNodes property returns a collection of a node's child nodes, as a NodeList object.
// The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
/* List of properties:
1. first(Element)Child = used to get the first child element of a node. 
2. last(Element)Child = the last child element of a node. 
3. parent(Element)Node = access a parent node of an element. 
4. next(Element)Sibling = the element next to the element already accessed.
5. previous(Element)Sibling gets for us the element previous to the element already accessed.
*/
console.log(document.body.children) // return the children as an HTMLCollection;

// Why is this helpful?
// ! THE WHOLE THING IS AN OBJECT AND WE CAN USE NOT NOTATION TO TRAVERSE THROUGH IT AND GRAB SPECIFIC ELEMENTS

let listDiv = document.getElementById('list'); 

console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling.nextSibling);

/* Challenge:
Using those properties, access various items in the DOM.
*/

// Adding and Removing HTML content
// --------------------------------

// I can change the text on my DOM through these methods.
// innerText: Specifies the text content of the specified node
// innerHTML: Specifies the HTML content of an element
// Be careful when using innerHTML to set HTML content, because it removes the HTML content that is inside the element and adds the new one.

//1. Let's start by using a method to grab a list of my li tags and assign it to a variable.

// let liTag = document.getElementsByTagName('li');
// console.log(liTag); //HTMLCollection

//2. What do I have in my toolbox to iterate over each element in this list? FOR OF LOOP!

for(tag of liTag) {
  // console.log(tag);
  tag.style.fontFamily = 'cursive';
}

document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron';

document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops';


// ADDEVENTLISTENER();
// ------------------

// This method listens to an event. There are some DOM elements that we can listen for. Buttons are the most common DOM element. 
// It expects as specific action to be listening for. click is most often used. 
// https://www.w3schools.com/jsref/dom_obj_event.asp

document.getElementById('clickMe').addEventListener('click', (event) => {
  // console.log(event);
  // console.log(event.target);
  event.target.style.backgroundColor = 'lightBlue';
});

document.getElementById('listInput').addEventListener('keyup', (event) => {
  // console.log(event);
  console.log(event.target.value);
})

// CREATEELEMENT() and APPENDCHILD();
// ------------------------------------

// Let's add another item to my grocery list!
// First, I need to create an <li> element.
let newGrocery = document.createElement('li');

// Let's look in the browser. But wait, I don't see it!
// Even though I have created an element, I didn't specify where I wanted it. We can use the appendChild() method to specify under which parent node we want to add it.
// First I need to grab the element I want to add my <li>tag to.
let groceryList = document.getElementById('groceryList');

// Then I can use appendChild() to add the newly created <li> to my parentnode.
// left side = parent node I want to append to ---- right side = child I want to append
groceryList.appendChild(newGrocery);

// Refresh the browser and you see an empty spot housing your new <li>! The next step is to give it some content. What have we seen that can do that for us?
newGrocery.innerText = 'Ginger Root';

// Notice that this <li> isn't styled the same way as the other items. Let's console.log all of the the grocery <li>'s. We created a variable earlier that we can use.
console.log(grocery) // --> Gives us a HTMLCollection containing only 3 items, not 4.
// We set the variable to grab all those <li>s earlier and this new <li> lives outside of that variable.

//_____________________________________________________________________________________________
//Let's do that again, but with a different tag.
// I don't currently know that they bottom three items of my list are ingredients that I need to pick up from the store. Let's create an <h3> tag that says 'Grocery List'.

let groceryTitle = document.createElement('h3');

// Even though I have created an element, I didn't specify where I wanted it. We can use the appendChild() method to specify under which parent node we want to add it.
// First I need to grab the element I want to add my <h3>tag to.
let groceryDiv = document.getElementById('groceryDiv');

// Then I can append my newly created <h3>tag to my groceryDiv;
// left side = parent node I want to append to ---- right side = child I want to append
groceryDiv.appendChild(groceryTitle);

// In my browser, it won't look like I have changed anything. Open up the dev/inspect tools and under the ELEMENTS tab, navigate to the groceryDiv. Notice, we now have an empty <h3> tag nested underneath my <ul>.
// Let's add some text content to this.

groceryTitle.innerText = 'Grocery List';

// Great! But it's still underneath my list rather than above it. Let's change that!
groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);

// Syntax 
// node.insertBefore(newnode, existingnode)
// newnode: The node object you want to insert (Required)
// existingnode: The child node you want to insert the new node before. If set to null, the insertBefore method will insert the newnode at the end (Required)

// ---------------------------------------------------------------------------------

// Write eventlistener to grab and display in console the value from input field. If there is time, show them they can add it to the array of nodes using .push().