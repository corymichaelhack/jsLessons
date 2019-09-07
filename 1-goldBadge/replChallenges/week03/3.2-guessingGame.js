// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()


let game = () => {
let computerAnswer = Math.floor(Math.random() * 10 + 1);
let gameLost = false;

for (let guessCount = 3; guessCount >= 1; guessCount--) {
  let userGuess = parseInt(prompt("Guess a Number between 1 and 10"));
  if (userGuess < 1 || userGuess > 10) {
    alert('Guess outside of range. Guesses remaining: ' + (guessCount - 1));
  } else {
    if (userGuess === computerAnswer) {
      alert("Winner Winner Chicken Dinner!");
      break;
    } else if (guessCount > 1 && userGuess > computerAnswer) {
      alert("Please guess lower. Guesses Remaining: " + (guessCount - 1));
    } else if (guessCount > 1 && userGuess < computerAnswer) {
      alert("Please guess higher. Guesses Remaining: " + (guessCount - 1));
    } else {
      gameLost = true;
    }
  }
}

if (gameLost) {
  alert("MWAH HAHAHAHA you lose");
}
console.log(computerAnswer);
}