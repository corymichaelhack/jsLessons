/*
    Find the sum of all numbers in an array that are a multiple of three    

    If there are no multiples of three, the function should return a message saying there are no multiple of three
    
*/

const arr = [ 1, 2, 3, 6, 7, 8, 9, 15, 22 ];
const failArr = [ 1, 2, 1, 2, 1, 2 ];


const arrAdder = (arr) => {
    let multiplesOfThree = arr.filter(num => num % 3 === 0);
    console.log(multiplesOfThree);
    if(multiplesOfThree.length < 1) return 'No multiples of three';

    return multiplesOfThree.reduce((total, num) => total + num);
};

console.log(arrAdder(arr));