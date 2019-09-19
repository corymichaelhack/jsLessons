/* *****************
  API Fundamentals
*******************/
/*
  Folder Structure:
    JSMonth2019
      javascriptLibrary
        0-prework
        1-jsFundamentals
        2-domFundamentals 
        3-apiFundamentals(new folder)
      projects

        create index.html plus boilerplate
        create index.js and include script tag in index.html

        open in default browser
*/

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);

// ? Explain APIs

// ? Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.

// ? As a real-world example, think about the electricity supply in your house, apartment, or other dwellings. If you want to use an appliance in your house, you simply plug it into a plug socket and it works. You don't try to wire it directly into the power supply — to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.

function fetchSpace(e) {
  e.preventDefault();
  // console.log(e);

  // ? Explain Fetch and Async Programming

  // ? Async Programming is what happens when even though we write our code in a specific order, we want the data to come back in a different order. Sometimes, we want our code to wait to execute until AFTER we have gotten specific data back.
  // ? If a function relies on the result of another function, it has to wait for the other function to finish and return, and until that happens, the entire program is essentially stopped from the perspective of the user.

  // ? Fetch() is method which starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. The promise resolves to the Response object representing the response to your request.

  fetch(baseURL)

    // ? Explain promises

    // ? Promises are a built-in language feature of JavaScript and makes handling asynchronous code easier and more readable. Promises are basically objects representing the eventual completion (or failure) of an asynchronous operation, and its resulting value. 
    // ? The promise constructor takes one argument which is a callback with two parameters, `resolve` and `reject`. Do something within the callback, then call resolve if everything worked, otherwise call reject.
    // ? We can chain multiple promises one after another with .then() chaining.
    // ? The deep reason why promises are often better is that they're more composable, which roughly means that combining multiple promises "just works" while combining multiple callbacks often doesn't.
    .then(result => {
      // console.log(result);
      return result.json();
    })
    .then(json => {
      // console.log(json);

      // ? Explain callbacks

      // ? A callback function in its simplest terms is a function that is passed to another function, as a parameter. The callback function then gets executed inside the function where it is passed and the final result is returned to the caller.
      // ? This is an immensely useful feature of functional programming as callbacks lets us handle code asynchronously without us have to wait for a response.
      displayRockets(json);
    });
}

function displayRockets(json) {
  console.log('Results:', json);
  let rockets = json.forEach(r => {
    let rocket = document.createElement('tr');
    let rocketName = document.createElement('td');
    let rocketCost = document.createElement('td');

    rocketName.innerText = r.name;
    rocketCost.innerText = r.cost_per_launch;
    
    spaceShips.appendChild(rocket);
    rocket.appendChild(rocketName);
    rocket.appendChild(rocketCost);

  })
}

// Challenge! First, find cost per rocket in the object. Then, format both responses into a data table with the headers name and cost. Each rocket should have its own row.