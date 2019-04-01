function isRightTriangle (a, b, c){
  return a*a + b*b === c*c ? true : false;
}

console.log(isRightTriangle(4,4,7));