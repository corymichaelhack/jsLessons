class Person{
    constructor(name){ // this is what allows us to "construct" a property onto our new object. We are using the constructor to bring in that parameter, and then using the 'this ' keyword, we set that property to that value; 
        this.name = name;
    }
    hello(){// called a method when its coming from a class. objects can have methods attatched, just like we can call a method for arrays and string. those are objects that have certain properties and methods too
        return this.name;
    }
}



class CoolGuy extends Person{ // this is like a class that has access to the properties and methods of another class, and can build up on those
    heyy(){
        return super.hello() + ` and I am a cool guy`; // super, a way to reach back to the class it extends from to get methods
    }
}

class NotCoolGuy extends Person{
    boo(){
        return super.hello() + ` and I am not a cool guy`;
    }
}

let a = new Person("Autumn"); 
console.log(a.hello())

const maker = (name) =>{
    const nameIt = new Person(name);
    const tryer = nameIt.hello();
    if(tryer === 'Autumn'){
        const autumn2 = new CoolGuy(tryer);
        console.log(autumn2.heyy());
    } else{
        const ing = new NotCoolGuy(tryer);
        console.log(ing.boo());
    }
}; 

maker('Ing');
 
