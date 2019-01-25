const baseurl = 'https://www.thesportsdb.com/api/v1/json/1/';
const key = '1';
let url;

const searchCity= document.querySelector('.city');// This is the input field for city
const searchName =document.querySelector(".name"); // This needs to be another input field
const searchForm = document.querySelector('form');
const updateBtn = document.querySelector('.submit');

const teamList = document.querySelector('ul');

searchForm.addEventListener('submit', fetchResults);
function fetchResults(e) { //function is ran when searchForm from previous section is "submit" 
e.preventDefault();
    url = baseurl + 'searchteams.php?t=' + searchCity.value+'%20'+searchName.value ;// This needs to change to incorporate both values
    console.log(url)
    
    fetch(url)
      .then(function(response) {
          console.log(response);
        return response.json();
        })
        .then(function(json) {
            console.log(json);
        displayResults(json); 
        });
      }
function displayResults(json) {
  let teamResults = json.teams[0].strTeam
  console.log(teamResults);
};




