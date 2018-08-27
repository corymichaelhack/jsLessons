// JS

// function demoFunction(someNum){
//   return someNum;
// }
// ​
// demoFunction(1); // 1
// demoFunction("stuff"); // stuff
// let demo = demoFunction(1, "Stuff"); // 1
// console.log(demo);

// TS

function numbers(numOne: number, numTwo: number): void {
  console.log(numOne + numTwo);
}

numbers(1, 2);

const somethingElse = (oneThing: string, twoThing: string, threeThing?: boolean): string => {
  return oneThing + ' ' + twoThing + ' ' + threeThing;
}

let thatThing = somethingElse('Jack', "John", true);
console.log(thatThing);

// OPTIONAL PARAMS MUST GO AFTER REQUIRED ONES

