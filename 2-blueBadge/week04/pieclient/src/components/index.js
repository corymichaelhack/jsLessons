const url = 'http://localhost:3000/'

const Front = () => {
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }) 
    .then(res => res.text())
    .then(text => displayResults(text))
}

const displayResults = (res) => {
  console.log(res)
  return res;
}

export default Front;