const submit = document.querySelector("#btn");
const result = document.querySelector("#result");
const errorMessage = "Please enter value in the required fields.";
const weight = document.getElementById("weight");
const height = document.querySelector("#height");
function calculate(weight, height) {
  // logic to calculate the bmi

  let bmi = 0;
  let measure = "";
  height = height/100;
  bmi = (weight / Math.pow(height, 2)).toFixed(1);

  //   various conditions in bmi

  if (bmi < 18.5) {
    measure = `Underweight: ${bmi}`;
    result.innerHTML = measure;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = `Normal: ${bmi}`;
    result.innerHTML = measure;
  } else if (bmi >= 25 && bmi < 29.9) {
    measure = `Overweight: ${bmi}`;
    result.innerHTML = measure;
  } else {
    measure = `Obese: ${bmi}`;
    result.innerHTML = measure;
  }
}
// adding eventlistener on the submit button

submit.addEventListener("click", function (e) {
  e.preventDefault();
  calculate(Number(weight.value), Number(height.value));
});
