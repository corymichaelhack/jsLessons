// Write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.

// characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.

// items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

// Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.

let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 228,
    characters: [{
            charOne: {
                name: 'Legolas',
                age: 2931,
                items: [{
                        itemOne: 'Bow & Arrow'
                    },
                    {
                        itemTwo: 'Daggers'
                    }
                ]
            }
        },
        {
            charTwo: {
                name: 'Gandalf',
                age: 2019,
                items: [{
                        itemOne: 'Staff'
                    },
                    {
                        itemTwo: 'Cool pointy hat'
                    }
                ]
            }
        }
    ],
    genre: 'Action & Adventure'
}

console.log(lotrObj.nameOfMovie);
console.log(lotrObj.runTime);
console.log(lotrObj.characters);
console.log(lotrObj.characters[0].charOne.name);
console.log(lotrObj.characters[0].charOne.items[0].itemOne);
console.log(Object.keys(lotrObj));
console.log(Object.keys(lotrObj.characters[0].charOne));