const baseURL = "https://rickandmortyapi.com/api/";

let url;
let firstEpisode;

const getInfo = document.querySelector("form");
const img = document.querySelector("img");
const btn = document.querySelector('button');
const ul = document.querySelector("ul");
const div = document.querySelector("div");
const div1 = document.querySelector(".card");


const characterNumber = document.querySelector("input");

getInfo.addEventListener("submit", fetchCharacters);

function fetchCharacters(e) {
  e.preventDefault();

  url = `${baseURL}character/${characterNumber.value}`;

  fetch(url)
    .then(results => results.json())
    .then(json => displayResults(json))
}

function displayResults(json) {
    
    while(div1.firstChild) {
        div1.removeChild(div1.firstChild);   
    }

    let episode1 = json.episode[0];
    console.log(json, episode1)
    
    fetch(episode1)
      .then(results => results.json())
      .then(json2 => {
        console.log(json2);

        let ep = json2.episode;
        console.log(ep);

        let div2 = document.createElement("div");
        let img = document.createElement("img");    
        let heading = document.createElement("h2");
        let status = document.createElement("p");
        let gender = document.createElement("p");
        let species = document.createElement("p");
        let origin = document.createElement("p");
        let episode = document.createElement("p");
        
      
        img.src = json.image;
        heading.innerHTML = json.name;

        
        status.innerHTML = `<p><span>Status</span>: <em>${ characterStatus }</em></p><hr>`;
        
        gender.innerHTML = `<p><span>Gender</span>: <em>${ characterGender }</em></p><hr>`;
        
        species.innerHTML = `<p><span>Species</span>: <em>${ characterSpecies }</em></p><hr>`;
        
        origin.innerHTML = `<p><span>Origin</span>: <em>${ characterOrigin.name }</em></p><hr>`;
        
        episode.innerHTML = `<p><span>First ep</span>: <em>${ ep }</em></p><hr>`;
    
        div1.appendChild(div2);
        div2.setAttribute("class", "cardbox");
        
        div2.appendChild(img);
        div2.appendChild(heading);
        
        div2.appendChild(species);
        div2.appendChild(gender);
        div2.appendChild(origin);
        div2.appendChild(status);
        div2.appendChild(episode);
    });

   
    let characterStatus = json.status;
    let characterGender = json.gender;
    let characterSpecies = json.species;
    let characterOrigin = json.origin;
} 
