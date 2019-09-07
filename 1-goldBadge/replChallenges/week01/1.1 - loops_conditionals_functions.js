// 1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a callback function (see step 2).

// 2. Declare a function named callback. This function needs to accept a parameter. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below.

// After you've successfully console.logged 0-10 (as pictured above), move on to step 3.

// 3. Inside of the callback function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.

for (i = 0; i <= 10; i++){
    callback(i)
}

function callback(num){
    console.log(num);

    if(num % 2 === 0){
        console.log('the number is even')
    } else if(num % 1 === 0){
        console.log('the number is odd')
    }
}