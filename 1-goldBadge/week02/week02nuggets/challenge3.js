let firstFunc = (secondFunc) => {
  let num = 5;
  for (let i = 0; i < 10; i++){
    num = secondFunc(num);
  }
  return num;
}

let secondFunc = (num) => {
  return num + Math.floor(Math.random()*3);
}

console.log(firstFunc(secondFunc));