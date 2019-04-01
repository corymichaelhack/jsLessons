qOrPRemover = (stringArr) => {
  return stringArr.filter(string => {
    return (!(string.includes('p') || string.includes('q') ||
              string.includes('P') || string.includes('Q')))
  })
}

capitalFirst = (stringArr) => {
  return stringArr.map(string => {
    return string.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1, word.length)).join(' ');
  })
}

let inputArr = ['tyler Michael shelton', 'LAINEY', '1150 academy', 'quietly tiptoe', 'this is a thing'];
console.log(qOrPRemover(capitalFirst(inputArr)));