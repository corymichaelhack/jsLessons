/**************************
CODE CHALLENGE 3 - STRINGS
**************************/
// * Give Students about 30/40 Minutes then go over solutions - Get students to Slack their own solutions after giving instructor solution
/*
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments
*/

const stringCheck = '    Welcome to eleven fifty     ';

const findTheCompany = (str, callback) => {
  str = typeof (str) == 'string' && str.trim().length > 0 && str.trim().length < 30 ? str.trim() : false;
  
  if (str) {
    str = str.replace('eleven fifty', 'Eleven Fifty');
    return callback(false, str);
  } else {
    return callback(true, 'Error: String must not be empty and must be a string type');
  }
}

const fixedString = findTheCompany(stringCheck, (err, message) => {
  if (!err && message) {
    return message;
  } else {
    return {
      error: err,
      message: message
    }
  }
})

console.log(fixedString);

// * Pie Client Walkthrough Part Three