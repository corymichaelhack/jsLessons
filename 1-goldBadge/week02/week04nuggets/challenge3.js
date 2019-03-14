promFunction = () => {
  let time = Date.now();
  new Promise((res, rej) => {
    return time%2 === 0 ? res('the time returned even!') : rej('the time returned odd!');
  })
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
}

promFunction();