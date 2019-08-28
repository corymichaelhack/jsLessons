/*
    Object Copying, Object Methods, Typechecking & Looping

    Without using Object.assign(), write a function that takes in an object, and returns a copy of that object. 
    
    Still within the function, change the values for the properties to reflect yourself.

    This function should not modify or mutate the original object in anyway.

    Return the object at the end of the function.
*/

const student = {
    name : 'Timmy',
    language : 'JavaScript',
    badge : 'blue'
};

const objectCopier = (copyObj) => {
    if(typeof copyObj !== 'object') return 'Argument should be of type object';

    newObj = {};
    let values = Object.values(copyObj);
    let keys = Object.keys(copyObj);

    for(i = 0; i < keys.length; i++) {
        newObj[keys[i]] = values[i];
    };

    newObj.name = 'Alecx';
    newObj.language = 'JavaScript & C#';
    newObj.badge = 'Rainbow';

    return newObj;
};

let newStudent = objectCopier(student);
console.log(student);
console.log(newStudent)