let obj = {
    str : 'String',
}; 

  if(typeof(obj.str) === 'string' ){
      console.log('The value is a string');
  } else if(typeof(obj.str) === 'number'){
      console.log('The value is a number');
  } else if(typeof(obj.str) === 'boolean'){
      console.log('The value is a boolean');
  } else {
      console.log('This is a different type')
  }