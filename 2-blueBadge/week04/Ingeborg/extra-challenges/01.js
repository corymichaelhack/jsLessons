/*
    Date Object, Typechecking, Time based math

    Write a function that takes in two dates, and returns the number of minutes passed between them.

    Function should return an string message if it's arguments are not instances of the Date type.

    Note : There are 1440 minutes in a day and you will need the Date object.
*/

let then = new Date('3/24/19');
let now = new Date('3/25/19');

let failNum = 2;

const minuteCounter = (timeOne, timeTwo) => {
    if(timeOne instanceof Date && timeTwo instanceof Date) {
        let secondsPasses = (timeOne - timeTwo) / 1000;
        let minutesPassed = (secondsPasses / 60) * -1;
        
        return minutesPassed;
    }

    return 'Arguments should be of type Date';
}

console.log(minuteCounter(then, now)); // * returns 1440
console.log(minuteCounter(failNum, failNum)); // ! Breaks