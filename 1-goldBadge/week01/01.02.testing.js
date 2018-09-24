var x = 12

function scope() {
  var x = 33
  console.log(x);
}
scope()//33
console.log(x); //12

// Which value shows?

var x = 12

function scope() {
  x = 33 // HERE
  console.log(x);
}

scope() // 33
console.log(x); //33

//new idea
var x = 12

function scope() {
  var x = 33 // HERE
  if (true){
    var x = 45;
    console.log(x);
  }
  console.log(x);
}

scope() // 45, 45
console.log(x); //12

var x = 12

function scope() {
  var x = 33 // HERE
  if (true){
    let x = 45;
    console.log(x);
  }
  console.log(x);
}

scope() // 45, 33
console.log(x); //12

function constTest() {
  const scope = 1;
  if (true) {
    const scope = 2;
    console.log(scope); // 2
  }
  console.log(scope); // 1
}

constTest();

let x = -5;
let y = -3;
switch(x < 0 || y > -10){
  case(x):
    console.log('x > 0');
    break;
  case(y):
    console.log('x < -10');
    break;
  default:
    console.log('bummer');
}

//infinite loop below
for (let i = 0; i < 20; i++){
  console.log(i);
  i--;
}

let obj = {
  key1: 'ha',
  key2: 0,
  key3: null
}

console.log(obj.propertyIsEnumerable('key1'));
console.log(obj.propertyIsEnumerable('key2'));