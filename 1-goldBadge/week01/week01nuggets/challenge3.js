let object = {
  string: 'test',
  number: 10,
  boolean: false,
  object: {key: 'sample'},
  func: () => 10
}

let value = object.boolean;

if (typeof value === 'string'){
  console.log('this value is a string');
} else if (typeof value === 'number'){
  console.log('this value is a number');
} else if (typeof value === 'boolean'){
  console.log('this value is a boolean');
} else if (typeof value === 'object'){
  console.log('this value is an object');
} else if (typeof value === 'function'){
  console.log('this value is a function');
}

console.log(typeof value === 'string' ? 'this value is a string'
  : typeof value === 'number' ? 'this value is a number'
  : typeof value === 'boolean' ? 'this value is a boolean'
  : typeof value === 'object' ? 'this value is an object'
  : typeof value === 'function' ? 'this value is a function'
  : 'what are you?!')