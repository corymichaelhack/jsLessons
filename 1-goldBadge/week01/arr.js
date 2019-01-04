/*
Challenge:
Given the array, create a function that lists out the values individually.
*Hint* we will need a for In loop
*/
let arr = ['This', 'is', 'really', 'cool'];
function arrList() {
  for (i in arr) {
    console.log(arr[i]);
  }
  // for (item of arr) {
  //   console.log(item)
  // }
}
arrList();