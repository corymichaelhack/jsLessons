fetch('https://rickandmortyapi.com/api/character')
.then(res => res.json())
.then(json => display(json))

function display(json) {
  console.log(json)
  let rick = json.results[0].image;
  let morty = json.results[1].image;
  document.getElementById('imageOne').src = rick;
  document.getElementById('imageTwo').src = morty;
}