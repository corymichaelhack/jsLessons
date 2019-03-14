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