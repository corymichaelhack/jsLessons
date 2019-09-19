/*
/*******************
DAY ONE REACT CHALLENGE
*******************/

/*
BRONZE LEVEL:
Convert the 'StatePropsChallenge' component to a class component.
Use the constructor method to initialize state for
this component.  State should hold 3 key-value pairs:

{
            console : 'Playstation',
            version : 4,
            maker : 'Sony'
        }

Inside the render method, build a button.  This button should
console.log() the state object when it gets clicked.  Good luck!

SILVER LEVEL:
Do all of the above, but make a new functional component called
'PropDisplay' (careful with folder stucture!).  Call this component
three times inside the 'StatePropsChallenge' render method.  Each 'PropDisplay'
component call should be passed a prop, the first is passed 'console',
the second 'version', and the third 'maker'.  Each PropDisplay should 
display the prop it gets passed.  Good luck!

GOLD LEVEL:
Do all of the above, but refactor your render so that instead of calling
PropDisplay three times, you create an array of jsx inside of render.

Find a way to iterate over the state object, with each iteration, create a PropDisplay component, and pass the values in the state one by one. Each PropDisplay component
should have its prop defined dynamically.  You shouldn't have to make a 'console',
'version', and 'maker' prop by hard-coding the their names.  Add the array of JSX to the render
*/