// Classes => containers
// class Person {
//   firstName: string;
//   lastName: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let austin = new Person();
// austin.firstName = 'Austin';
// austin.lastName = 'Kamin';
// let austinFullName = `${austin.firstName} ${austin.lastName}`;
// console.log(austinFullName);
// Methods => functions in classes
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Person;
}());
var kenn = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();
// Constructors
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
console.log(battleship);
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
var monopoly = new GameWithoutConstructor();
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
console.log(monopoly);
// Inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.type = 'car';
myCar.make = 'DeLorean';
myCar.model = 'DMC-12';
myCar.year = 1983;
myCar.runs = true;
myCar.topSpeed = 88;
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myBike = new Motorcycle();
myBike.easyToDoWheelie = true;
myBike.make = 'Harley-Davidson';
//# sourceMappingURL=4-classes.js.map