class Person{
    constructor(name){
        this.name = name;
    }
    hello(){
        return this.name;
    }
}
class CoolGuy extends Person{
    heyy(){
        return super.hello() + ` and I am a cool guy`;
    }
}

class NotCoolGuy extends Person{
    boo(){
        return super.hello() + ` and I am not a cool guy`;
    }
}

const maker = (name) =>{
    const nameIt = new Person(name);
    const tryer = nameIt.hello();
    if(tryer === 'Autumn'){
        const autumn2 = new CoolGuy(tryer);
        console.log(autumn2.heyy());
    } else{
        const alecx2 = new NotCoolGuy(tryer);
        console.log(alecx2.boo());
    }
}; 

maker('Alecx');
 
