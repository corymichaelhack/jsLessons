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
exampleObj = {
  color: 'green',
  smashes: true,
  name: 'Hulk'
}

function checker(obj){
  let list = Object.keys(exampleObj);
  for(l in list){
    if(l == "color"){
      if(obj.color == 'green'){
        return true;
      }
    }
  }
}

let exampleObj = {
  color: 'green',
  smashes: true,
  name: 'Hulk'
}

console.log(objChecker(exampleObj, 'silly'));

function objChecker(obj, key){
  let objKeys = Object.keys(obj);
  if(objKeys.includes(key)){
    if(obj[key] == val){
      return true
    } else{
      return false
    }
  } else {
    return false
  }
  // return (objKeys.includes(key)) ? true : false;
}

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