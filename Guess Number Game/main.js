const guessField = document.getElementById("guessField");
const submit = document.querySelector("#btn");
const chanceLeft = document.querySelector("#chanceLeft");
const guessValue = document.querySelector("#guessValue");
const result = document.querySelector("#result");

// function to generate the random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100 + 1);
var count =10;


// function for checking the values.
function guessNumber() {
  
  console.log(randomNumber);


  if(count > 0)
  {
    while (count > 0) {
        let inputValue = guessField.value;
    
        if (inputValue === randomNumber) {
          result.innerHTML = `YaY!! You won the game`;
          count--;
          guessValue.innerHTML = `Equal.`;
          chanceLeft.innerHTML = `${count}`;
          inputValue = "";
        } else if (inputValue >= randomNumber) {
          count--;
          chanceLeft.innerHTML = `${count}`;
          guessValue.innerHTML = `High`;
          inputValue = "";

        } else {
          if(count >0)
          {
            count--;

          }
          chanceLeft.innerHTML = `${count}`;
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
