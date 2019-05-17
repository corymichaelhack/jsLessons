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
let sampleString = '     i will marry amy marie baker        ';

function pigLatin(str) {
    let wordsArray = str.trim().split(' ');
    wordsArray.forEach((word, index) => {
        let lettersArray = word.split('');
        while (lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u'){
            lettersArray.push(lettersArray[0]);
            lettersArray.shift();
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    });
    return wordsArray.join(' ');
}

console.log(pigLatin(sampleString));

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
Tutorial Page Submission to LMS and Presentations? --this needs to be deployed to github pages

deploying to github pages:
    1)  make sure students have index.html file as their first html webpage
    2)  once students have set up a github repo, they need to choose a source for deployment (should be master)
*/


/*
Portfolio Build
mine below:
https://docs.google.com/document/d/12bxXGWWdHp7dJ5A_KqXtebbbI9Qj6UOEzQqkvQn1Vgk/edit?usp=sharing
tom's below:
https://docs.google.com/document/d/1IxXtLUDJu7E-kt8WWFD6T2JsIj-ZcR6cG_SlZGkkcWg/edit

--this also needs to be deployed to github pages, repo named 'username.github.io'

Repl.it Assessment 3 - DUE BY TOMORROW MORNING
*/