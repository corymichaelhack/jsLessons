// * Clone starter repo
// https://github.com/AlecxMoritz/typescript-demo-starter

// * Make sure typescript is installed
// run tsc -v
// if not installed npm install -g typescript

// compile typescript with tsc
// open index.html in live server

// Part 1 :: Types

/* Explain that TypeScript is strongly typed and we need to declare the types with our variables if we want to take advantage of type safety with TypeScript

*/
let framework : string = 'Angular'; 
let age : number = 25;
let rainy : boolean = true;
let instructors : string[] = [ 'Dave', 'Autumn', 'Alecx' ];
let anyKind: any[] = [12, 'yes', true]

// Part 2 :: Functionsharry

/* Show how functions are written nearly the same way, but we can put type safety on our parameters */


function multipleNums(numOne: number, numTwo: number) {
    return numOne * numTwo;
}

console.log(multipleNums(2,2));

// Part 3 :: Classes 

/* Create the following class. Explain that properties are essentially just data inside and about a class. We can set those properties manually using dot notation.
 */

class Character {
    name : string;
    talent : string;
}

let harry : Character = new Character();
harry.name = 'Harry Potter';
harry.talent = 'Living';

// We can also add methods to classes
    // Add this right under the class property

    // greet () {
    //     console.log("Hi, I'm ", this.name);
    // };

// We can also add constructors here to set up our class for us
    // Add this above the properties

//     constructor(name : string, talent : string) {
//         this.name = name;
//         this.talent = talent;
//     }

// Notice that our constructor function is mad now, we need to give it the correct value

// Part 4 :: Interfaces
// Interfaces are an agreement you make with your code saying 'yes, this object will have these properties and methods' - we don't declare what the actual values will be, but simply that they -will- be

interface Villain {
    name : string;
    plot : string;

    scheme();
};

class voldemort implements Villain {
    constructor(name : string, plot : string) {
        this.name = name;
        this.plot = plot;
    }

    name : string;
    plot : string;

    scheme() {
        console.log(`I am ${this.name}, and I want to ${this.plot}`)
    }
};

let darkLord = new voldemort('The Dark Lord', 'Rule the world');
darkLord.scheme();

// Slack out book
// https://app.gitbook.com/@eleven-fifty-academy/s/typescript-101-fundamentals/part-1-getting-started