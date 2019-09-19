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
let colors = ['red','orange','coral','yellow','green','teal','blue','indigo','violet','black']
let suf = ['st','nd','rd','th','th','th','th','th','th','th']
function colorNums(color,sufx){
   for(let x =0; x<10;x++){
       console.log(`${x+1}${sufx[x]} is ${color[x]} `)
   }
}
colorNums(colors,suf);

let colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'black', 'orange', 'teal', 'brown'];
let suffArr = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorPlacement(colors, suffixes){
  colors.forEach((element, index) => {
    console.log(`${index+1}${suffixes[index]} is ` + `${colors[index]}`);
  });
}

colorPlacement(colorArr, suffArr);

/*

DOM Manipulation Tutorial - HP To Do List Walk Through
API Tutorial - SpaceX Rockets WalkThrough
Assign API Modules
Lab Time
Repl. Challenge

*/