/*
Submit tutorial page to LMS

Challenge (Arrays):
Color List:

Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

Not to make it too hard on yourself, you can stop the count at ten
*/

let colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'black', 'orange', 'teal', 'brown'];
let suffArr = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorPlacement(colors, suffixes){
  colors.forEach((element, index) => {
    console.log(`${index+1}${suffixes[index]} is ` + `${colors[index]}`);
  });
}

colorPlacement(colorArr, suffArr);

/*
DOM Walk Through 
Assign API Gitbook

Go through gitbook with class

API Walk Through

Rest of day work through book
*/