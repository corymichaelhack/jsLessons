let arr = [0, 1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++){
//   arr[i]%2 === 0 ? console.log('your number is even') : console.log('your number is odd')
// }

// for (let num of arr){
//   num%2 === 0 ? console.log('your number is even') : console.log('your number is odd');
// }

arr.forEach(num => {
  num%2 === 0 ? console.log('your number is even') : console.log('your number is odd');
})