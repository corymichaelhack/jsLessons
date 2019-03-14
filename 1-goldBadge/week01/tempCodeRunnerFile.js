function checker(){
let str = 'bob';
let rev = str.split('').reverse().join('');

console.log(rev);

  if(str == rev){
    console.log(true);
  } else {
    console.log(false);
  }
}
checker();