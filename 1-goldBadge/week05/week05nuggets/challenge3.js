var one = 'hello';
let two = 'hi';
const three = 'greetings';
console.log(one, two, three);

function functionalScope() {
  var one = 'a';
  let two = 'b';
  const three = 'c';
  if (true){
    var one = 1;
    let two = 2;
    const three = 3;
  }
  console.log(one, two, three);
}

functionalScope();