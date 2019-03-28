/*
    BRONZE :    
        Create a function that takes in an array
    and returns the sum of all the element of an array.

    SILVER :
        If the array does not have any elements in it, return 
    a string message for invalid arguments
    
    GOLD :
        Return the sums of the elements that are multiples of three ONLY
        If there are no multiples of three, return a string message for 
        invalid arguments

    const arr = [ 1, 2, 3, 6, 7, 8, 9, 15, 22 ];

*/

const arr = [ 1, 2, 3, 6, 7, 8, 9, 15, 22 ];
const empty = [];
const failArr = [ 1, 2, 1, 2, 1, 2 ];

// * Bronze

const bronze = (arr) => {
    let sum = 0;

    for(num of arr) {
        sum += num;
    }
    
    return sum;
};

/* Better
    const bronze = (arr) => {
        return multiplesOfThree.reduce((total, num) => total + num);
    };

*/ 

console.log(bronze(arr)); 
//  73

// * Silver

const silver = (arr) => {
    if(arr.length < 1) {
        return 'Invalid Argument'
    };

    let sum = 0;

    for(num of arr) {
        sum += num;
    }
    
    return sum;
};

console.log(silver(empty));

// * Gold

const gold = (arr) => {
    if(arr.length < 1) {
        return 'Invalid Argument'
    };

    let multiplesOfThree = arr.filter(num => num % 3 === 0);
    let sum = 0;

    if(multiplesOfThree.length < 1) return 'No multiples of three';

    for(num of multiplesOfThree) {
        sum += num;
    }
    
    return sum;
};

console.log(gold(arr)); // 33