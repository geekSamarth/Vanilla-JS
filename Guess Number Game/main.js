const guessField = document.getElementById("guessField");
const submit = document.querySelector("#btn");
const chanceLeft = document.querySelector("#chanceleft");
const guessValue = document.querySelector("#guessValue");
const result = document.querySelector("#result");
// function to generate the random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100 + 1);

// function for checking the values.
function guessNumber() {
  
  console.log(randomNumber);

  var counter = 10;

  if(counter > 0)
  {
    while (counter > 0) {
        let inputValue = guessField.value;
    
        if (inputValue === randomNumber) {
          result.innerHTML = `YaY!! You won the game`;
          counter--;
          guessValue.innerHTML = `Equal.`;
          chanceLeft.innerHTML = `${counter}`;
          inputValue = "";
        } else if (inputValue >= randomNumber) {
          counter--;
          chanceLeft.innerHTML = `${counter}`;
          guessValue.innerHTML = `High`;
          inputValue = "";

        } else {
          counter--;
          chanceLeft.innerHTML = `${counter}`;
          guessValue.innerHTML = `Low`;
          inputValue = "";

        }
      }
  }
  else
  {
    result.innerHTML = `OOPS!! You Loss. Try again!`
  }
}


submit.addEventListener('click',function(e){
    e.preventDefault();
    guessNumber();
})
