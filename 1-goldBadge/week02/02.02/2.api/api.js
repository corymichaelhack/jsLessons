const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

// Explain APIs
//Application Programming Interface

function fetchSpace(e) {
  e.preventDefault();
  // console.log(e);

  // Explain Fetch and Async Programming

  fetch(baseURL)

    // Explain promises
    .then(result => {
      // console.log(result);
      return result.json();
    })
    .then(json => {
      // console.log(json);

      // Explain callbacks
      displayRockets(json);
    })
}

function displayRockets(json) {
  // console.log('Results:', json);
  let rockets = json.forEach(r => {
    let rocket = document.createElement('li');
    rocket.innerText = r.name;
    spaceShips.appendChild(rocket);
  })
}
// Challenge! First, find cost per rocket in the object. Then, format both responses into a data table with the headers name and cost. Each rocket should have its own row. 