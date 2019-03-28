/*********************
ICE BREAKER CHALLENGE
*********************/
// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution
//pair students to solve the below challenge.  random pairs will present their solutions

/* 
  Write a function that takes an object as input.  The function should return the total length of 
  all the characters in the keys of the object by alternately adding and subtracting the length of
  each key.  Don't mutate(change) the original object.
  

    BRONZE :: 
      Write a function that takes an object as a parameter. Return the total number of keys in the object.

      For example:
          Given: {
            gold: 'Vanilla',
            blue: 'React',
            red: 'Angular'
          }

        Should return 3, since there are three keys in the object.

    SILVER ::
      Modify the function to return the total number of characters in the objects keys.

      For example:
        Given: {
          gold: 'Vanilla',
          blue: 'React',
          red: 'Angular'
        }

        Should return 11. Since there are 11 characters in the words 'gold', 'blue' and 'red'.

      GOLD ::
        Modify the function to alternate between adding and subtracting the length of they keys.
        Start by getting the length of the first key, then subtract, then add, subtract, add so and and so forth.

      For example:
        Given: {
          gold: 'Vanilla',
          blue: 'React',
          red: 'Angular'
        }
        
        Should return 3, since the first key is four characters(+4), the second is four characters(-4), and the third is three(+3)
*/

let testObj = {
  gold: 'Vanilla',
  blue: 'React',
  red: 'Angular'
};

// * Bronze

let bronze = (obj) => {
  return Object.keys(obj).length;
};

console.log(bronze(testObj));

// * Silver

let silver = (obj) => {
  let keys = Object.keys(obj);
  let totalLength = 0;

  for(key of keys) {
    totalLength = totalLength +  key.length
  }

  return totalLength;
}


console.log(silver(testObj));

// * Gold

let gold = (obj) => {
  let keys = Object.keys(obj);
  let totalLength = 0;
  let add = true;

  for(key of keys) {
    if(add) {
      totalLength = totalLength +  key.length;
      add = false;
    } else {
      totalLength = totalLength -  key.length;
      add = true;
    }
  }

  return totalLength;
}

console.log(gold(testObj));

// * React Component LifeCycle Demo