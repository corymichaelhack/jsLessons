/******************
 * 01 - Declaration
 ******************/
var username = 'test';
var password = 'letMeIn123';
var instructorID = 1234;
var password2;
var phoneNumber;
var email;
// Implicit typing => don't have to declare the type
var socialSecurityNumber;
socialSecurityNumber = 1234567890;
// Compile time error checking
// let socialSecurityNumber2: number;
// socialSecurityNumber2 = '1234567890';
/*****************
 * 02 - Basic Types
 *******************/
// Number
var age = 30;
var year = 2018;
// String
var companyName;
companyName = "Eleven Fifty Academy";
var studentName = 'Tom';
// Boolean
var isLoggedIn = true;
var isGoldLevel = false;
// Array
var students = ['Tony', 'Marshall', 'Rhys', 'Ray'];
var counting = [100, 90, 80, 70];
// Any
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//Void
function sayHelloToAll() {
    console.log('Hello to all');
}
sayHelloToAll();
var sayHelloAgain = function () {
    console.log('Hello again');
};
sayHelloAgain();
// Null and Undefined
var nullVar = null;
var undefVar = undefined;
//Tuple
var usernameID;
usernameID = [1234, 'test'];
// Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Spear"] = 1] = "Spear";
    WeaponType[WeaponType["Knife"] = 2] = "Knife";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
console.log(weapon);
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
    CardType[CardType["Five"] = 5] = "Five";
})(CardType || (CardType = {}));
;
var cards = CardType[1];
console.log(cards);
/****************
 * 03 - Union Types
 ****************/
var x;
x = 1234;
x = '1234';
console.log("Test test test test test test test", x);
//# sourceMappingURL=2-types.js.map