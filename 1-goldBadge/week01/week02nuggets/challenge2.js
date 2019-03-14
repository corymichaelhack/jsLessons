let sampleObj = {
  thingA: 10,
  thingB: 'test',
  thingC: false,
  thingD: [1,2,3,4]
}

let sampleFunc = (obj) => {
  let arr = [];
  arr.push(Object.keys(obj));
  arr.push(Object.values(obj));
  arr.push(Object.keys(obj).length);
  return arr;
}

console.log(sampleFunc(sampleObj));