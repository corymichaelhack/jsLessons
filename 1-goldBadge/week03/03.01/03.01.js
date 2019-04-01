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
let sampleString = '     eleven fifty is looking for a new building        ';

function pigLatin(str) {
    let wordsArray = str.trim().split(' ');
    wordsArray.forEach((word, index) => {
        let lettersArray = word.split('');
        while (lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u') {
            lettersArray.push(lettersArray[0]);
            lettersArray.shift();
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    });
    return wordsArray.join(' ');
}

console.log(pigLatin(sampleString));

/*
Tutorial Page Submission to LMS and Presentations?--this needs to be deployed to github pages

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

//Hybrid Class Materials Below

/*
Hybrid Portfolio Walkthrough

1)  Add following to html file:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hybrid Portfolio Example</title>
</head>
<body>

</body>
</html>

2)  add following below title:
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  discuss where this link came from--show them the splash page for the bootstrap cdn

3)  discuss container, row, column orientation of bootstrap
  add container inside of body.  inside the container, add the following:
  <div class="row" style="color: red">
    <div class="col">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
</div>

--discuss same-size columns, show them inspector tool and how the columns dynamically change size

4)  discuss how there are breakpoints in the bootstrap grid system.  show students the following,
and that the grid breaks at a specific screen width defined in the bootstrap docs:
<div class="row" style="color: blue">
    <div class="col-md">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-md">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-md">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
</div>

5)  discuss that bootstrap has a behind the scenes 12-column system.  show them the following, and that
it doesn't break from grid:
<div class="row" style="color: orange">
    <div class="col-4">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-4">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-4">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-4">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
</div>

6)  show students that you can combine the column sizes with breakpoints to generate something like the
following:
<div class="row" style="color:green">
    <div class="col-sm-7">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-sm-3">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
    <div class="col-sm-2">
    <p>This is a test paragraph, but it should allow you to see bootstrap columns in action!</p>
    </div>
</div>
*/

/*
sample student portfolios:
https://alsummers.github.io/Portfolio/#contact
https://madysonward.github.io/
https://iacostewart.github.io/port2/
*/

/*
show off the portfolio requirements page:
https://docs.google.com/document/d/11Ez9KSrkebGyT3QNJMRY17mTEFWorV9x0mbYLib-bKY/edit#
*/

/*
finally, let's pull in the use of bootstrap components.  

add the following below the container -> row -> column structure already built out:
1)  navbar
2)  jumbotron
3)  carousel
*/