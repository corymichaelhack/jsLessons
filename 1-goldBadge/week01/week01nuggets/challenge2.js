const first = 'firstName';
let second = 'middleName';
var third = 'lastName';

function play(){
  const first = 'a';
  console.log(first, second, third);
  if (5 > 4){
    const first = 1;
    let second = 2;
    var third = 3;
    console.log(first, second, third);
  }
  console.log(first, second, third);
}

play();
console.log(first, second, third);
