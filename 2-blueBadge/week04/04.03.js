/**************************
CODE CHALLENGE 3 - STRINGS
**************************/

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


/**************************
CLASS COMPONENTS AND STATE
**************************/

/*
Run through making a functional component for a footer (recap) => make with functional keyword instead of fat arrow for variety

Discuss differences between functional components and class components => class discussion on which is better

Change folder structure (change paths accordingly):
  src
    components
      layout
        Footer.js
        Navbar.js
    ...
  
Talk about making login/signup form in file

Add constructor and super and state:
  constructor() {
    super();
    this.state = {
      isUser: false
    }
  }

Explain what this is doing
  Constructor not necessary, but common for OOP classes => contains and, well, constructs the class => if constructor only has super(), you will get a warning telling you that you have a useless constructor

  super() is something that brings data in from the parent component => do not go too deep

  state is something that all browsers have (the only thing without is HTTP requests => statelessness [rest]). It is like setting data that the whole site can use => remember in NYT app, nav.style.display = 'none' set that the app would start off as hiding its navbar?  State is like this on a grander level.

  https://daveceddia.com/why-not-modify-react-state-directly/?utm_campaign=0601modify
*/

/*
Add:
  changeUserStatus = () => {
    this.setState({ isUser: !this.state.isUser })
  }

  authViewShow = () => {
    if (this.state.isUser) {
      return (
        Login
      )
    } else {
      return (
        Signup
      )
    }
  }

  ...

  <Navbar/> 
    { this.authViewShow() }
  <Footer/>

BRIEFLY explain 'this'.

Explain what we are doing.
*/

/*
Create auth folder inside components folder and add Login.js and Signup.js


*/