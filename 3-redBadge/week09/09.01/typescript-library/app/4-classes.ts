// Classes => containers
// class Person {
//   firstName: string;
//   lastName: string;
// }

// let austin = new Person();

// austin.firstName = 'Austin';
// austin.lastName = 'Kamin';

// let austinFullName = `${austin.firstName} ${austin.lastName}`;

// console.log(austinFullName);

// Methods => functions in classes
class Person {
  firstName: string;
  lastName: string;
​
  sayHello(){                   
      console.log("Hello", this.firstName);
  }
}
​
let kenn: Person = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();

// Constructors
class Game {
  constructor (name: string, maker: string) {
    this.gameName = name;
    this.gameMaker = maker;
  }
  gameName: string;
  gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');
console.log(battleship);


class GameWithoutConstructor {
  gameName: string;
  gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';

console.log(monopoly);

// Inheritance
class Vehicle {
  type: string;
  make: string;
  model: string;
  year: number;
  runs: boolean;
  topSpeed: number;
}

class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.type = 'car';
myCar.make = 'DeLorean';
myCar.model = 'DMC-12';
myCar.year = 1983;
myCar.runs = true;
myCar.topSpeed = 88;

class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myBike: Motorcycle = new Motorcycle();
myBike.easyToDoWheelie = true;
myBike.make = 'Harley-Davidson';

