let produce = [
  {name:'Sweet Potatoes', amount:4, price:2},
  {name:'Heirloom Tomatoes', amount:15, price:1.50},
  {name:'Kolrabi', amount:2, price:4},
  {name:'Honey Combs', amount:1, price:10}, 
  {name:'Yellow Onions', amount: 5, price: 3},
  {name:'Strawberries', amount: 10, price: 3.5}
];

// let mapVeggies = () => {
//   veggAmounts.map(veggie => {
//     let veggieCard = <div>
//         <h2>veggie.name</h2>
//         <p>veggie.amount</p>
//         <p>veggie.price</p> 
//       </div>
//     return( 
//       veggieCard
//     )
//   })
// }

// mapVeggies();


// produce.map(item => {
//   console.log( ` name: ${item.name}, amount: ${item.amount}, price: ${item.price} `)
// });

produce.map(x => console.log(`${x.name} amount: ${x.amount} price: ${x.price}`));