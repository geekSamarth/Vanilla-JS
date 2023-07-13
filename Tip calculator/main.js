const calculateTip = document.querySelector(".calculateTip");
const numberOfPeople = document.getElementById("peopleNumber");
const tip_selection = document.getElementById("tip_selection");
const yesSplit = document.getElementById("yesSplit");
const noSplit = document.getElementById("noSplit");
const billAmount = document.getElementById("billAmount");

// logic for getting the value of radio buttons for yes and no
function yesSplitting() {
  const BillAmount = billAmount.value;
  const selectedTip = tip_selection.value;
  const noOfPeople = numberOfPeople.value;
  if (yesSplit.checked) {
    document.querySelector(".personInput").style.display = "block";
    console.log(BillAmount);
    console.log(selectedTip);
    // console.log(noOfPeople);
  }
}
function noSplitting() {
  if (noSplit.checked) {
    document.querySelector(".personInput").style.display = "none";
  }
}
yesSplit.addEventListener("click", function () {
  yesSplitting();
});
noSplit.addEventListener("click", function () {
  noSplitting();
});


// logic for calculating the tip for the bill

calculateTip.addEventListener('click',function(e){
    e.preventDefault();
    tipCalculation();
})