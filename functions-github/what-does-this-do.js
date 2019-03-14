//first example:
function mysteryFunc(number, width){
  let string = String(number);
  while (string.length < width){
    string = "0" + string;
  }
  return string;
}

function mysteryFunc2(cows, chickens, pigs){
  console.log(`${mysteryFunc(cows, 3)} Cows`);
  console.log(`${mysteryFunc(chickens, 3)} Chickens`);
  console.log(`${mysteryFunc(pigs, 3)} Pigs`);
}

mysteryFunc2(5, 7, 11);

//second example:
const mysteryFunc3 = (parameter) => {
  const arr = [];
  for (let i = 0; i < parameter; i++){
    arr.push(i);
  }
  let outputArr = arr.map(el => {
    let response = '';
    return response = el % 5 === 0 && el % 3 === 0 ? response + 'fizz buzz'
    : el % 5 === 0 ? response + 'fizz' 
    : el % 3 === 0 ? response + 'buzz' 
    : response
  })
  return outputArr;
}

console.log(mysteryFunc3(100));

//third example:
function mysteryFunc4(){
  let args = [...arguments];
  let returnObj = {};
  let argsTracker = {};
  args.forEach(el => {
    !argsTracker[typeof el] ? argsTracker[typeof el] = 1 : argsTracker[typeof el]++
    returnObj[typeof el + argsTracker[typeof el]] = el;
  });
  console.log(returnObj);
}

mysteryFunc4(4, 5, 6, 'tyler', true, {key: 5}, 'tom mcclellan', {sample: 'test'});