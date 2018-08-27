interface Product {
  name: string;
  price: number;
  setTimeOfPurchase(d: Date);
}

class Apples implements Product {
  name = 'Apples';
  price = 5.50;

  setTimeOfPurchase(d: Date) {
    console.log(`Apples purchased on ${d}`);
  }
}

let themApples: Apples = new Apples();
themApples.setTimeOfPurchase(new Date(Date.now()));