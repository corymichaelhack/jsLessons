// 1. Write a fat arrow async function that does the following:
// Uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
// Uses await to jsonify the response received from the fetch
// console.log's the results of the fetch before console.logging a message saying 'this should print last'

const request = async () => {
    const response = await fetch('https://swapi.co/api/people/1');
    const json = await response.json()
    console.log(json)

    return 'this should print last'
  }

  request().then(console.log).catch(err => console.log(err));