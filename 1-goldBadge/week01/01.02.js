/*
************
ASSIGNMENT 1 PRESENTATIONS
************

    - CSS CREATURES DUE - submit codepen.io links via Canvas
*/

/*
OVERVIEWS FOR TODAY
************

    - Git
    - Scope
    - Hoisting
    - Literals
    - Assignment Operators
    - Comparison Operators
    - Conditionals
    - Ternaries
*/

/*
GIT LESSON
************

    - dir to see what directory you're currently in
    - cd into jsSeptember2019

    Folder Structure:
        javascriptSeptember2019
            javascriptLibrary
                0-prework
                1-jsFundamentals <-------- GIT REPO HERE
                    1-grammarAndTypes

    GITHUB
        - signup or signin to github
        - create new repository called jsFundamentals
*/

/*
    In CMD:
        git init
        git status
        git add .
        git commit -m "message"
        git remote add origin *paste repo here*
        git push origin master
*/

/*
************
TERMINAL DUNGEON
************

    - DUE THURSDAY BY 9AM
    - in CMD, make a new folder on Desktop or in Documents called 'terminalDungeon' <-------- mkdir terminalDungeon
    - show them how to clone a repository
        - git clone <paste in repository link>
    - look at readme file in repository
        - go over CMD commands: cd, cd.., dir/ls
*/

/*
SCOPE
************

    Folder Structure:
        1-grammarAndTypes
            03-scope.js <-------- CREATE: in VSCode

    - scope is how a computer keeps track of all the variables in a program
    - scopes can also be nested, where there's an outer scope (think global) that encloses an inner scope (think local)

    Think about global scope as Planet Earth. Everything belongs to or is on Earth itself. WE live in indianapolis,
    which could be considerd our local scope.

    Same is true for JavaScript: the code we write as a whole has a global scope
        - we can also create instances of local scopes within our code

    NO CODING - JUST WATCH PLEASE!
*/

let x = 12;

// This is something we havent seen before. This is a function. Pay attention to the curly {} braces, this is what decides whats inside and outside of our function
function scope() {
    let x = 33;
    console.log(x);
}

scope(); //33
console.log(x); //12

//---------------------------------------------------------------------------------------------------------------------------------------

let y = 12;

function scope() {
    y = 33; // HERE
    console.log(y);
}

scope();
console.log(y);

/*
    Why did this happen?

    - In the first example, we declare a variable of 'x' and initialize it with a value of 12. Then, inside our function, we declare and initialize a NEW variable. Although it has the same name as the variable we declared outside of our function, it technically becomes a different variable - this is due to scope. Our function has it's own 'local' scope. Everything inside of the curly braces of our function is that functions own local scope.
        - 'let x = 12' is a part of our global scope (think the document or our code as a whole)
        - when we create a new function, that function has it's own local scope


    - In the second example, we declare a variable of 'y' and initialize it with a value of 12. Then, inside the function we are re-initializing the SAME variable, not declaring a NEW variable!
        - We're re-initializing our variable of 'y' to a new value, so even when we leave the scope of the function, the value of the variable has been changed. We didn't declare and initialize a NEW variable, we re-initialized a variable that's already been declared
*/

/*
VAR vs LET
************

    - with the introduction of ES6, we now have three keywords for variables: var, let, and const

    - Const is pretty straight forward; it is a constant that cannot be re-expressed.

    - Var and Let seem to operate the same. But while they do have a lot of the same functionality (they both allow us to declare and initialize a variable), they also behave differently.
        - Var is scoped to the nearest function block and Let is scoped to the nearest enclosing block.

    NOTE:  We have not seen functions before, we will go in depth tomorrow. WATCH, DONT CODE!
*/

// VAR
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x); //45
        // console.group(x);
    }
    console.log(x); //45
    // console.group(x);
}

varTest();
console.log(x); //12
// console.group(x);

/*
    What is the expected output from above?

    - 'var x = 12' is located in our global scope.

    - inside the function code block (curly {} braces) a new variable (again, same name, different variable) is declared and initialized as 33

    - inside of the function is something we havent seen before, called a conditional statement. We will cover conditionals later today, but understand for now:
        - if the statement inside the parenthesis is true, we go inside the corresponding code block. Since this statement is true, inside the block, we declare and initialize a new variable AGAIN.
        - inside this block, when we run our console.log statement, JS assumes were refering to the x inside the block with us.
        - remember that 'var' is scoped to the nearest function block, not the nearest enclosing block like 'let'. That is why our first variable declaration of x gets reinitialized as 45.
*/

// LET
var x = 12;

function letTest() {
    var x = 33 // HERE
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

letTest(); // 45, 33
console.log(x); //12

/*
    Since we're now using LET within the local scope of our if conditional, what do we think we'll see when we run this code?

    - we should see 45, 33, 12

    - because let is scoped to the nearest enclosing block (the if statement in this case), we don't see it bleeding into the scope of our entire function like we did in the first example with var

    - this is the main reason that let is now more widely used than var is: we don't have to worry about any bleeding/scope creep in our functions/conditionals
*/

// CONST
function constTest() {
    const scope = 1;
    // const scope = 3;
    if (true) {
        const scope = 2;
        console.log(scope); // 2
    }
    console.log(scope); // 1
}

constTest();

/*
HOISTING
************

    Folder Structure:
        1-grammarAndTypes
            04-hoisting.js <-------- CREATE: in VSCode

    - javaScript is interpreted line-by-line (so read top to bottom), but before the code is executed, there is a first pass made by the compiler - which is where hoisting is performed. During the first pass of code, the code is interpreted and then compiled for execution, but execution of the code doesn't actually happen until the second pass.

    - during the first pass of the code, the parser runs through our code and begins to setup what we have written for translation. It recognizes where we have declared variables and where we have declared functions. This first pass of the code essentially is looking at anything on the left side of our assignment operator (let firstName = ______), and is storing those declared variables to memory for assignment during the second pass of our code, and then hoisting any necessary functions.

    - during the second pass of our code, or the execution phase, is actually when the values we have given to our variables are assigned. Since JavaScript allows for the reassignment of variables (except for const), the actual assignment of our variables needs to happen during the second pass through of our code. That way if we declare a variable and initialize it with a value, but later change that value in our code, the secondary value we assign to the variable is what is read and assigned.

    *** First pass: Stores our variable declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there), but does not assign them their values. Anything that needs to be hoisted is hoisted.

    *** Second pass: Assigns the values to our variables and executes any hoisted source code.
*/

console.log(name);
let name = 'Zach'

b();

function b() {
    console.log("I have been hoisted");
}


// Lets take a look at the example in the code snippet above:
// What is happening during the first pass, or creation phase of our code? The compiler will look for any variable declarations and store them in memory, but the value will not be assigned. Any functions that need hoisted will also be hoisted. In this case, our variable of name will be stored in memory, but the value of 'Zach' will not be assigned. Our function b will also be hoisted.

// So what's happening during the second pass, or execution phase of our code? Lets start with the function and disregard lines 1 & 2 for now. Why can we run this code without receiving any errors? During the first pass through of our code, our function b was hoisted. Although it looks like this code may break since we are invoking the function before we actually define the function, this isn't the case. Since the function b was hoisted during the first pass through of our code, we can actually invoke said function before defining it. You can essentially think of our function b as being defined before (or being above) the invocation since it was hoisted during the first pass through.

// Now let's talk about our variable name. We know that our variable was stored to memory during the first pass through of our code and that no value was assigned. During the second pass through, our value of 'Zach' will be assigned to our variable of name. Why would this example throw us an error, though? Well, as I mentioned in my previous message, JavaScript is read and interpreted line-by-line. This means that although our variable of name is stored in memory, we are trying to run a console.log of that variable before we assign it it's value during the second pass through of our code. Take a look at this error message in the screenshot below. We see the error message: "cannot access 'name' before initialization". So our compiler knows that the variable of name is defined (it was stored to memory during the first pass), it just hasn't been initialized (or the value hasn't been assigned). Again, since JavaScript is read line-by-line, we are trying to console.log our variable of name before it's given a value. (edited)

/*
LITERALS
************

    Folder Structure:
        1-grammarAndTypes
*/