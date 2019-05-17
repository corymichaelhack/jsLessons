/**************************
CODE CHALLENGE 3 - STRINGS
**************************/
// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution
/*
  BRONZE ::
    Create a function that takes in the string

    const stringCheck = '  Welcome to eleven fifty   ';

    The function should remove extra whitespace before or after 
    the characters is trimmed, and should change the string so that the 
    the first 'e' and 'f' in 'eleven fifty' is capitalized. 

  SILVER ::
    Add typechecking and make sure the string parameter is a string.
    Also check to make sure the length is greater than zero, but less than
    30. If the string is invalid, return a message for an invalid argument.

  GOLD ::
    Create a callback function that prints a parameter to the console.
    Add a second parameter to the string function from Silver and Bronze for a callback function.
    Instead of returning the data, pass it callback function, and log it to the console.
*/

const stringCheck = '  Welcome to eleven fifty   ';

// * Bronze

const bronze = str => {
  let trimmedString = str.trim();

  let replacedString = trimmedString.replace('eleven fifty', 'Eleven Fifty')

  return replacedString;
}

console.log(bronze(stringCheck));

const sleekerBronze = str => {
  return str.replace('eleven fifty', 'Eleven Fifty').trim();
}

console.log(sleekerBronze(stringCheck));

// * Silver

const silver = str => {
  if (typeof str !== 'string' || str.length < 1 || str.length > 30) {
    return 'Invalid argument';
  };

  return str.replace('eleven fifty', 'Eleven Fifty').trim();
};

console.log(silver(stringCheck));

// * Gold

const logger = (data) => {
  console.log(data);
}

const gold = (str, callback) => {
  if (typeof str !== 'string' || str.length < 1 || str.length > 30) {
    callback('Invalid argument');
    return
  };

  let formattedString = str.replace('eleven fifty', 'Eleven Fifty').trim()
  callback(formattedString);
};


gold(stringCheck, logger);


// * React Concept Talk Three ( Functional Components )

// * React Concept Talk Four ( Class Components and State )

// * Pie Client Walkthrough Part Two