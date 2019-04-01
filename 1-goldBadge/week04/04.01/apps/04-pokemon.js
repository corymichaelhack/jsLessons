//DOM ELEMENTS
const tHead = document.getElementById("tHead");
const tBody = document.getElementById("tBody");
const searchPoke = document.getElementById("searchPoke");

///API VARIABLES
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

let checks = [];

function searchPokemon(){
	let pokeName = searchPoke.value;
	if(pokeName.trim() == "") {
		alert("Enter a pokemon!");
	} else {
		url = baseURL + pokeName.toLowerCase();
		fetch(url)
		.then(response => {
			return response.json();
		}).then(data => {
			console.log(data)
			fillTable(data);
		})
	}
}
	
function fillTable(pokeObj){
	while (tHead.firstChild) {
		tHead.removeChild(tHead.firstChild);
	}
	while (tBody.firstChild) {
		tBody.removeChild(tBody.firstChild);
	}
	if (checks.length == 0) {
		alert("Please select at least one option");
	} else {
		tHead.innerHTML = '<tr><td><b>'+ "Pokémon:" + '</b></td><td><b>' + 
			capFirstName(pokeObj.name) + '</b></td></tr>';
		if (checks.includes("id")) {
			tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "PokéDex ID #:" + '</td><td>' + 
				pokeObj.id + '</td></tr>');
		}
		if (checks.includes("height")) {
			tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Height:" + '</td><td>' + 
				pokeObj.height + "cm" + '</td></tr>');
		}
		if (checks.includes("weight")) {
			tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Weight:" + '</td><td>' + 
				pokeObj.weight + "Kg" + '</td></tr>');
		}
		if (checks.includes("xp")) {
			tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Base Experience:" + '</td><td>' + 
				pokeObj.base_experience + "XP" + '</td></tr>');
		}
		if (checks.includes("stats")) {
			tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Base Stats (HP/Attack/Defense/Special Attack/Special Defense/Speed):" + '</td><td>' +
			 pokeObj.stats[5].base_stat + "/" +
			 pokeObj.stats[4].base_stat + "/" +
			 pokeObj.stats[3].base_stat + "/" +
			 pokeObj.stats[2].base_stat + "/" +
			 pokeObj.stats[1].base_stat + "/" +
			 pokeObj.stats[0].base_stat + '</td></tr>');
		}
		if (checks.includes("types")) {
			switch (pokeObj.types.length){
				case 2:
					tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Types" + '</td><td>' +
						capFirstName(pokeObj.types[1].type.name) + "/" + 
						capFirstName(pokeObj.types[0].type.name) + '</td></tr>');
					break;
				case 1:
					tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Type" + '</td><td>' +
						capFirstName(pokeObj.types[0].type.name) + '</td></tr>');
					break;
				default:
					break;
			}
		}
		if (checks.includes("abilities")) {
			switch (pokeObj.abilities.length) {
				case 3:
					tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Abilities" + '</td><td>' + 
						capFirstName(pokeObj.abilities[2].ability.name) + "/" + 
						capFirstName(pokeObj.abilities[1].ability.name) + "/" + 
						capFirstName(pokeObj.abilities[0].ability.name) + '</td></tr>');
					break;
				case 2:
					tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Abilities" + '</td><td>' + 
						capFirstName(pokeObj.abilities[1].ability.name) + "/" + 
						capFirstName(pokeObj.abilities[0].ability.name )+ '</td></tr>');
					break;
				case 1:
					tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Ability" + '</td><td>' + 
						capFirstName(pokeObj.abilities[0].ability.name) + '</td></tr>');
					break;
				default:
					break;
			}
		}
		if (checks.includes("sprites")) {
			if (pokeObj.sprites.back_default == null) {
				tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Sprites:" + '</td><td>' + 
				`<img src=${pokeObj.sprites.front_default} />` + '</td></tr>');
			} else {
				tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Sprites:" + '</td><td>' + 
					`<img src=${pokeObj.sprites.front_default} />` +
					`<img src=${pokeObj.sprites.back_default} />` + '</td></tr>');
			}
		}
	}
}

function checkBoxes(box) {
	if (box.checked) {
		checks.push(box.id);
	} else {
		if (checks.includes(box.id)) {
			checks.splice(checks.indexOf(box.id), 1);
		}
	}
}

function capFirstName(x) {
	for (let j in x) {
		if (j == 0) {
			x = x.replace(x[j], x[j].toUpperCase());
		}
		if (x[j-1] == "-") {
			x = x.replace(x[j], x[j].toUpperCase());
			x = x.replace(x[j-1], " ");
		}
	}
	return x;
}