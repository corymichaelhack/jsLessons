/******************
 * 01 - Declaration
 ******************/
let username: string = 'test';
let password: string = 'letMeIn123';
let instructorID: number = 1234;

let password2: string;
let phoneNumber: number;
let email: string;

// Implicit typing => don't have to declare the type
let socialSecurityNumber;
socialSecurityNumber = 1234567890;

// Compile time error checking
// let socialSecurityNumber2: number;
// socialSecurityNumber2 = '1234567890';

/*****************
 * 02 - Basic Types
 *******************/
// Number
let age: number = 30;
let year: number = 2018;

// String
let companyName: string;
companyName = "Eleven Fifty Academy";

let studentName: string = 'Tom';

// Boolean
let isLoggedIn: boolean = true;
let isGoldLevel: boolean = false;

// Array
let students: string[] = ['Tony', 'Marshall', 'Rhys', 'Ray'];
let counting: Array<Number> = [100, 90, 80, 70];

// Any
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
​
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//Void
function sayHelloToAll(): void {
  console.log('Hello to all');
}

sayHelloToAll();

const sayHelloAgain = (): void => {
  console.log('Hello again');
} 

sayHelloAgain();

// Null and Undefined
let nullVar: null = null;
let undefVar: undefined = undefined;

//Tuple
let usernameID: [number, string];
usernameID = [1234, 'test'];

// Enum
enum WeaponType { Sword, Spear, Knife };
let weapon: WeaponType = WeaponType.Sword;
console.log(weapon);

enum CardType { Ace = 1, Two, Three, Four, Five };
let cards: string = CardType[1];
console.log(cards);

/****************
 * 03 - Union Types
 ****************/
let x: number | string;
x = 1234;
x = '1234';

console.log("Test test test test test test test", x)