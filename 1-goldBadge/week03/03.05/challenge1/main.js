const baseURL = 'https://swapi.co/api/';

const people = document.querySelector('#people');
const planets = document.querySelector('#planets');
const starships = document.querySelector('#starships');
const species = document.querySelector('#species');

const display = document.querySelector('ul');

people.addEventListener('click', fetchData);
planets.addEventListener('click', fetchData);
starships.addEventListener('click', fetchData);
species.addEventListener('click', fetchData);

function fetchData(e) {
  e.preventDefault();
  console.log(e)
  fetch (baseURL + e.target.id)
    .then(response => {
      return response.json();
    }) 
    .then(json => {
      displayResults(json)
    })
}

function displayResults(json) {

  while(display.firstChild) {
    display.removeChild(display.firstChild);
  }

  let data = json.results;

  data.forEach(d => {
    let list = document.createElement('li');
    list.textContent = d.name;

    display.appendChild(list);
  });
}