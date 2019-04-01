const baseURL = 'https://swapi.co/api';

const select = document.querySelector('#person');

const display = document.querySelector('ul');
let list;

window.onload = fetchNow;

function fetchNow() {
  fetch(`${baseURL}/people`)
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      let data = json.results;
      data.forEach(d => {
        // console.log(d);
        // let link= document.createElement('a');
        let list = document.createElement('option');
        list.textContent = d.name
        list.setAttribute('value', d.name)
        // list.appendChild(link);
        select.appendChild(list)

        


        // let films = d.films;
        
        // films.forEach(f => {
        //   // console.log(f)

        //   fetch(`${f}`)
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        // })
        list.addEventListener('select', filmSelect);
        
        function filmSelect(e) {
          e.preventDefault();
          console.log('worked', e)
        }
      })
    })
}
