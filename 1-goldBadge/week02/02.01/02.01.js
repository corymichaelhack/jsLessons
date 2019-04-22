/*
Challenge (Strings):
Pig Latin:

Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.

If able to do so, return the value into another variable and print that variable

What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

function piggie(str) {
    switch (str[0]) {
        case 'a':
            console.log(`${str}ay`);
            break;
        case 'e':
            console.log(`${str}ay`);
            break;
        case 'i':
            console.log(`${str}ay`);
            break;
        case 'o':
            console.log(`${str}ay`);
            break;
        case 'u':
            console.log(`${str}ay`);
            break;
        default:
       let newArr = str.split('');
       console.log(`${newArr.splice(1).join('')}${str[0]}ay`);         
            break;
    }
}
piggie('Hey');

/*
Store Front Submission to LMS and Presentations?
*/


/*
Portfolio Build

https://docs.google.com/document/d/1IxXtLUDJu7E-kt8WWFD6T2JsIj-ZcR6cG_SlZGkkcWg/edit

Repl.it Assessment 3 - DUE BY TOMORROW MORNING
*/