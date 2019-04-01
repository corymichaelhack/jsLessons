/*
Creature Presentations:
Have 5 students present what they designed.
At end of those 5 presentations, give students 15 minutes to try to implement something they saw
a peer design.  Have a couple students show off revised creatures.
*/

/*
Literals, Operators, Conditionals Assignment:
Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change the values of the array based upon the index numbers of those values.  Use the =, +=, /=, %=, and **=
operators to make the change of each array value (only use one operator per conditional statement).

Here's my example starting and ending array:
starting: [13, 7, 32, 1, 4]
ending: [20, 8, 5.4, 1, 16]
        =20,+=1,/=6,%/2,**=2

Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.


Challenge 3:
Read the following article on hoisting, then let's make predictions on how each of the 3 examples
below would behave:
https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}

//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/

/*
Planning a Saturday Assignment:
We're going to plan Saturday events together with the help of variables and conditionals.

Here are the variable conditions you need to setup:
windy (boolean), sunny (boolean), rainy (boolean), hasCompletedChores (boolean), isMorning (boolean),
isAfternoon (boolean)

Here are the events you may or may not be able to complete:
grocery shopping, walking the dog, cleaning the house, indoor lunch with a friend, evening concert with fam

Your goal is to show your understanding of variable and conditionals by defining each variable listed above,
then to use conditionals and console.log if you can complete that event.  Note that the values of the
variables and the order in which you check the conditionals is totally up to you.  Have fun!
*/
