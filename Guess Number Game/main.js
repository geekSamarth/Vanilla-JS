const guessField = document.getElementById("guessField");
const submit = document.querySelector("#btn");
const chanceLeft = document.querySelector("#chanceLeft");
const guessValue = document.querySelector("#guessValue");
const result = document.querySelector("#result");

// function to generate the random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100 + 1);

const count = {
  counter: 10,
};
chanceLeft.innerHTML = count.counter;

// function for checking the values.
function guessNumber() {
  console.log(randomNumber);
  let inputValue = guessField.value;

  if (count.counter > 0) {
    if (inputValue === randomNumber) {
      result.innerHTML = `YaY!! You won the game`;
      guessValue.innerHTML = `Equal.`;
      chanceLeft.innerHTML = count.counter;
      console.log(inputValue);
      inputValue = "";
      console.log(inputValue);
    } else if (inputValue >= randomNumber) {
      count.counter--;
      chanceLeft.innerHTML = count.counter;
      guessValue.innerHTML = `High`;
      console.log(inputValue);

      inputValue = "";
      console.log(inputValue);
    } else {
      if (count.counter > 0) {
        count.counter--;
      }
      chanceLeft.innerHTML = count.counter;
      guessValue.innerHTML = `Low`;
      console.log(inputValue);

      guessField.value = "";
      console.log(inputValue);
    }
  } else {
    result.innerHTML = `OOPS!! You Loss. Try again!`;
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  guessNumber();
});
