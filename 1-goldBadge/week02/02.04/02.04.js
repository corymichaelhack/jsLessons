/*
Challenge (Objects):

Create a function that takes in an object

In the function, check if the object contains a specific property and return a boolean answer

Example: 

exampleObj = {
  color: 'green',
  smashes: true,
  name: 'Hulk'
}

checks for color has the value of 'green'

output: true


*/
hipsterObj = {
  occupation: 'liberal arts barrista',
  age: 28,
  transport: 'unicycle',
  vegan: true,
  hairStyle: 'manbun',
  favoriteHangout: 'kombucha bar',
}

function checker(obj) {
  let list = Object.keys(obj); //spits out an array
  console.log('list => ', list)
  for(l of list){ //use for of to loop through array. For in will give you indices.
    console.log('l =>', l)
    if(l == 'hairStyle'){
      if(obj.hairStyle == 'manbun'){
        console.log(true);
      }
    }
  }
}

checker(hipsterObj);


/*
NYT Walk Through

Assign Assignment 4 - API Challenge on LMS
*/

/*
API Project Examples:

https://pokemon-api-project-18bad.firebaseapp.com/

https://myapimapproject.firebaseapp.com/

https://starwarsapi-b9fb8.firebaseapp.com/

https://api-project-b64ba.firebaseapp.com/

https://star-wars-api-project.firebaseapp.com/

https://pokemon-81dd7.firebaseapp.com/
*/