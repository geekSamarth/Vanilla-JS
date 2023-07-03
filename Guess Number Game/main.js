const guessField = document.getElementById("guessField");
const submit = document.querySelector("#btn");
const chanceLeft = document.querySelector("#chanceLeft");
const guessValue = document.querySelector("#guessValue");
const result = document.querySelector("#result");

// function to generate the random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100 + 1);

// counter to count the number of guesses left in the game

const count = {
  counter: 10,
};

// counter toi indicate how much chance it take to guess the right Number

let totalGuess = 0;
chanceLeft.innerHTML = count.counter;
count.counter--;

// function that invokes everytime when user submit the guess

function guessNumber() {
  totalGuess++;
  let inputValue = guessField.value;
  console.log(randomNumber);
  if (count.counter > 0) {
    if (inputValue == randomNumber) {
      guessValue.innerHTML = `Equal`;
      result.innerHTML = `YAY!! You Won The Match in ${totalGuess} Guesses`;
      chanceLeft.innerHTML = `${count.counter};`;
      count.counter--;
      guessField.value = "";
    } else if (inputValue >= randomNumber) {
      guessValue.innerHTML = `High`;
      chanceLeft.innerHTML = `${count.counter}`;
      count.counter--;
      guessField.value = "";
    } else {
      guessValue.innerHTML = `Low`;
      chanceLeft.innerHTML = `${count.counter}`;
      count.counter--;
      guessField.value = "";
    }
  } else {
    chanceLeft.innerHTML = `${count.counter}`;
    result.innerHTML = `OOPS!! You Lose, Try Again!`;
    count.counter--;
    guessField.value = "";
  }
}
// adding addEventListener to the submit button

submit.addEventListener("click", function (e) {
  e.preventDefault();
  guessNumber();
});
